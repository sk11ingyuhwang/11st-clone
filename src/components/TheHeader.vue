<template>
  <div>
    <header>
      <div class="inner">
        <div 
          class="open-nav-drawer"
          @click="onNav">
        </div>
        <a
          href="/"
          class="logo"></a>
        <div class="search">
          <input
            v-model="searchText"
            placeholder="찾고 싶은 상품을 검색해 보세요!"
            @keypress.enter="search" />
          <div
            class="search__icon"
            @click="search">
          </div>
        </div>
        <div class="ranking">
          <div
            ref="swiper"
            class="swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(rank, index) in rankings.rankings"
                :key="rank.name"
                class="swiper-slide">
                <a :href="rank.href">
                  <span class="index">{{ index + 1 }} </span>
                  <span class="name"> {{ rank.name }} </span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="open-more"
            @click="toggleRankingWrap"></div>
          <div
            v-if="isShowRankingWrap"
            class="ranking-wrap">
            <div class="title">
              <h3>실시간 쇼핑 검색어</h3>
              <div class="time">
                {{ referenceDate }} 기준
              </div>
              <div
                class="close-wrap"
                @click="toggleRankingWrap"></div>
            </div>
            <div class="tabs">
              <div
                :class="{ active: !tabIndex }"
                class="tab"
                @click="tabIndex = 0">
                1위~10위
              </div>
              <div
                :class="{active: tabIndex}"
                class="tab"
                @click="tabIndex=1">
                11위~20위
              </div>
            </div>
            <ul class="list">
              <li
                v-for="(rank, index) in filterRankings"
                :key="rank.name">
                <a :href="rank.href">
                  <span class="index">{{ index + 1 }}</span>
                  <span class="name">{{ rank.name }}</span>
                  <span class="relative-name">{{ rank.relativeName }}</span>
                </a>
                <div
                  :class="rank.status"
                  class="icon"></div>
              </li>
            </ul>
          </div>
        </div>
        <ul class="user-menu">
          <li class="my">
            <a href="javascript:void(0)"></a>
            <ul class="my__menu">
              <li
                v-for="item in myMenu"
                :key="item.name">
                <a :href="item.href">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)"></a>
          </li>
          <li>
            <a href="javascript:void(0)"></a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="onNav('RNB')"></a>
          </li>
        </ul>
      </div>
    </header>
    <div
      :class="{ fixed : isFixed }"
      class="utils">
      <div class="inner">
        <ul>
          <li>
            <a href="javascript:void(0)">베스트</a>
          </li>
          <li>
            <a href="javascript:void(0)">쿠폰/혜택</a>
          </li>
          <li>
            <a href="javascript:void(0)">기획전</a>
          </li>
          <li>
            <a href="javascript:void(0)">오늘장보기</a>
          </li>
          <li>
            <a href="javascript:void(0)">T공식대리점</a>
          </li>
          <li>
            <a
              class="shocking-deal"
              href="javascript:void(0)"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import dayjs from 'dayjs'


export default {
  data(){
    return {
      searchText:'',
      searchResult: '',
      rankings: {},
      myMenu: [
        {name: '나의 쿠폰', href: 'javascript:void(0)'},
        {name: '주문/배송조회', href: 'javascript:void(0)'},
        {name: '취소/반품/교환', href: 'javascript:void(0)'},
        {name: '고객센터', href: 'javascript:void(0)'},
        {name: '회원정보', href: 'javascript:void(0)'}
      ],
      isShowRankingWrap: false,
      tabIndex: 0,
      isFixed: false
    }
  },
  computed: {
    referenceDate() {
      return dayjs(this.rankings.referenceDate).format('YYYY.MM.DD HH:mm')
    },
    filterRankings () {
      return this.rankings.rankings.filter((rank, index)=> {
        const start = this.tabIndex * 10
        const end = start + 9
        return start <= index && index <= end
      })
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    async init(){
      this.rankings = await this.$fetch({
        requestName: 'rankings'
      })
      console.log(this.rankings)

      await this.$nextTick()

      new Swiper(this.$refs.swiper, {
        direction: 'vertical',
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        loop: true
      })
    },
    onNav(){
      this.$store.dispatch('navigation/onNav')
    },
    async search(){
      if(!this.searchText.trim()) return
      console.log(this.searchText)
      this.searchResult = await this.$search({
        searchText: this.searchText
      })
      console.log(this.searchResult)
    },
    toggleRankingWrap(){
      this.isShowRankingWrap = !this.isShowRankingWrap
    }
  }
}
</script>
<style scoped lang="scss">
  // HEADER
  header {
    background-color: #fff;
  }
  // UTILS
  .utils {
    border-top: 1px solid #f1f1f1;
    &.fixed {
      padding-top: 120px;
    }
    .inner {
      width: 1240px;
      margin: 0 auto;
    }
    ul {
      display: flex;
      li {
        margin-right: 25px;
        &:last-child {
          margin-right: 0;
        }
        a {
          display: flex;
          align-items: center;
          height: 66px;
          font-size: 17px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #f43142;
            opacity: 0;
          }
          &:hover::after {
            opacity: 1;
          }
          &.shocking-deal {
            width: 63px;
            background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
            background-position: -94px 0;
            background-size: 363px;
          }
        }
      }
    }
  }
</style>

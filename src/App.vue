<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
  <Direct />

  <!-- <RouterView /> -->
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import RNB from '~/components/RNB'
import Direct from '~/components/Direct'


export default {
  components: {
    LNB, //지역등록
    TheHeader,
    Billboard,
    RNB,
    Direct,
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>

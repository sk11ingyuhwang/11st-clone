<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
  <Direct />
  <HotFocus />

  <!-- <RouterView /> -->
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import RNB from '~/components/RNB'
import Direct from '~/components/Direct'
import HotFocus from '~/components/HotFocus'

export default {
  components: {
    LNB, //지역등록
    TheHeader,
    Billboard,
    RNB,
    Direct,
    HotFocus,
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>

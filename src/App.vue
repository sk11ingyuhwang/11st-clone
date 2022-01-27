<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />

  <!-- <RouterView /> -->
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import RNB from '~/components/RNB'


export default {
  components: {
    LNB, //지역등록
    TheHeader,
    Billboard,
    RNB,
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>

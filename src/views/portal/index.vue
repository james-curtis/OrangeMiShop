<template>
  <nav>
    <BannerIndex />
    <ProductIndex />
  </nav>
</template>

<script>
import BannerIndex from './components/banner';
import ProductIndex from './components/product';
export default {
  name: 'PortalIndex',
  components: {
    BannerIndex,
    ProductIndex,
  },
};
</script>

<style lang="scss" scoped>
</style>

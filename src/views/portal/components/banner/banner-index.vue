<template>
  <div class="banner">
    <div class="contain">
      <BannerSidebar class="banner-sidebar" />
      <BannerBottom />
    </div>
  </div>
</template>

<script>
import BannerSidebar from './components/banner-sidebar.vue';
import BannerBottom from './components/banner-bottom.vue';
export default {
  name: 'BannerIndex',
  components: {
    BannerSidebar,
    BannerBottom,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  padding: {
    bottom: 1.25rem;
  }
  .contain {
    .banner-sidebar {
      padding-bottom: 1rem;
    }
    position: relative;
    width: 1226px;
    margin: 0 auto;
  }
}
</style>

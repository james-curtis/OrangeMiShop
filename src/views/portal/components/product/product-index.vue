<template>
  <div class="main-body">
    <div class="contain">
      <ProductBanner class="product-banner" />
      <ProductShow1 class="product-show" />


      <ProductBlock
        class="product-show"
        v-for="(v, k) in blocks"
        :key="k"
        :blockEntity="v"
      />
    </div>
  </div>
</template>

<script>
import ProductListEntity from '@/entity/portal/product-list-entity';
import ProductAdvertisementEntity from '@/entity/portal/product-advertisement-entity';
import VideoListEntity from '@/entity/portal/video-list-entity';

import PortalBiz from '@/biz/portal-biz';
import ProductBanner from './components/product-banner.vue';
import ProductShow1 from './components/product-show-1.vue';
import ProductShow2 from './components/product-show-2.vue';
import ProductBlock from './components/product-block.vue';
export default {
  name: 'ProductIndex',
  data() {
    return {
      /**
       * @type {Array.<ProductListEntity|ProductAdvertisementEntity|VideoListEntity>}
       */
      blocks: [],
    };
  },
  components: {
    ProductBanner,
    ProductShow1,
    ProductShow2,
    ProductBlock,
  },
  methods: {
    async queryPortalBlocks() {
      let biz = new PortalBiz();
      this.blocks = await biz.queryPortalBlocks();
      console.log(this.blocks);
    },
  },
  mounted() {
    this.queryPortalBlocks();
  },
};
</script>

<style lang="scss" scoped>
.main-body {
  width: 100%;
  background-color: #f5f5f5;
  padding: {
    top: 1.6875rem;
  }
  .contain {
    position: relative;
    width: 1226px;
    margin: 0 auto;
  }
}
.product-banner {
  padding-bottom: 1.5rem;
}
.product-show {
  padding-bottom: 1.5rem;
}
</style>

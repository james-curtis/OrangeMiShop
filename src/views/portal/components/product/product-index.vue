<template>
  <div class="main-body">
    <div class="contain">
      <ProductBanner class="product-banner" />
      <ProductShow1 class="product-show" />

      <ProductShow2
        class="product-show"
        v-for="(v, k) in products"
        :key="k"
        :productShowEntity="v"
      />
    </div>
  </div>
</template>

<script>
import ProductListEntity from '@/entity/portal/product-list-entity';
import PortalBiz from '@/biz/portal-biz';
import ProductBanner from './components/product-banner.vue';
import ProductShow1 from './components/product-show-1.vue';
import ProductShow2 from './components/product-show-2.vue';
export default {
  name: 'ProductIndex',
  data() {
    return {
      /**
       * @type {ProductListEntity[]}
       */
      blocks: [],
      productBlocks:[],
      advertisementBlocks:[],
      productBlocks:[],
    };
  },
  components: {
    ProductBanner,
    ProductShow1,
    ProductShow2,
  },
  methods: {
    async queryPortalBlocks() {
      let biz = new PortalBiz();
      this.products = await biz.queryPortalBlocks();
      console.log(this.products);
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

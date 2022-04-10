<template>
</template>

<script>
import ProductShow2 from './product-show-2.vue';
import ProductAD from './product-block-ad.vue';
import ProductBlockProductShow from './product-block-product-show.vue';
import ProductBlockVideo from './product-block-video.vue';

import ProductListEntity from '@/entity/portal/product-list-entity';
import ProductAdvertisementEntity from '@/entity/portal/product-advertisement-entity';
import VideoListEntity from '@/entity/portal/video-list-entity';
export default {
  name: 'ProductBlock',
  data() {
    return {};
  },
  components: {
    ProductAD,
    ProductBlockProductShow,
    ProductBlockVideo,
  },
  props: {
    blockEntity: {
      type: [ProductListEntity, ProductAdvertisementEntity, VideoListEntity],
      required: true,
    },
  },
  created(){
    console.log(this.blockEntity);
  },
  mounted(){
    console.log(this.isList);
  },
  computed: {
    isList: () => this.blockEntity instanceof ProductListEntity,
    isAD: () => this.blockEntity instanceof ProductAdvertisementEntity,
    isVideo: () => this.blockEntity instanceof VideoListEntity,
  },
};
</script>

<style lang="scss" scoped>
</style>

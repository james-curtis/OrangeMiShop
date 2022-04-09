<template>
  <div class="banner-slider">
    <Swiper class="swiper" :options="swiperOption">
      <SwiperSlide v-for="(v, k) in bannerImg" :key="k">
        <img class="swiper-img" :style="`background-image:url(${v})`" alt="" />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'BannerSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {},
  methods: {},
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      bannerImg: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a51ccb0237755ef3ad7021a6e6d43c.png?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5382801e740cadc2db5d93091c39c57.jpg?w=2452&h=920',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e169482b8cbf7a68daaef1464881446.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2bb41bcb59068731320bf11e27acd40a.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.swiper-img {
  height: 460px;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  width: 100%;
}
</style>

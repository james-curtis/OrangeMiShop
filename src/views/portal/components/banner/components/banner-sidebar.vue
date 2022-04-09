<template>
  <div>
    <div class="banner-siedbar">
      <ul>
        <li><span>手机</span> <i class="iconfont-arrow-right-big"></i></li>
        <li><span>电视</span> <i class="iconfont-arrow-right-big"></i></li>
        <li>
          <span>笔记本 平板</span> <i class="iconfont-arrow-right-big"></i>
        </li>
        <li><span>家电</span> <i class="iconfont-arrow-right-big"></i></li>
        <li><span>出行 穿戴</span> <i class="iconfont-arrow-right-big"></i></li>
        <li>
          <span>智能 路由器</span> <i class="iconfont-arrow-right-big"></i>
        </li>
        <li><span>电源 配件</span> <i class="iconfont-arrow-right-big"></i></li>
        <li><span>健康 儿童</span> <i class="iconfont-arrow-right-big"></i></li>
        <li><span>耳机 音响</span> <i class="iconfont-arrow-right-big"></i></li>
        <li><span>生活 箱包</span> <i class="iconfont-arrow-right-big"></i></li>
      </ul>
    </div>
    <div class="banner-siedbar-tips" v-show="false">
      <ul>
        <li v-for="i of new Array(24).keys()" :key="i">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/58eff3ffcf8df68e9ee8bbf90f1e8fa9.png?thumb=1&w=40&h=40&f=webp&q=90"
            alt=""
          />
          <span>{{ i }}黑鲨5 Pro</span>
        </li>
      </ul>
    </div>
    <BannerSlider />
  </div>
</template>

<script>
import BannerSlider from './banner-slider.vue';
export default {
  name: 'BannerSidebar',
  components: {
    BannerSlider,
  },
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.banner-siedbar {
  display: inline-block;
  width: 235px;
  padding: 20px 0;
  background-color: rgba(105, 101, 101, 0.6);
  li {
    position: relative;
    height: 42px;
    line-height: 42px;
    color: white;
    &:hover {
      background: #ff6700;
    }
  }
  span {
    margin-left: 1.875rem;
  }
  i {
    color: #e0e0e0;
    position: absolute;
    right: 1.25rem;
  }
}

.banner-siedbar-tips {
  width: 994px;
  display: inline-block;
  position: absolute;
  height: 460px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 18%);
  li {
    padding: 1.31rem 0 1.31rem 1.18rem;
    float: left;
    width: 16.5625rem;
    img,
    span {
      float: left;
      line-height: 2.5rem;
    }
  }
}
.banner-slider{
  float: right;
  width: 991px;
}

</style>

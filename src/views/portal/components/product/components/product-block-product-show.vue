<template>
  <div class="contain">
    <div class="product-header">
      <h2>手机</h2>
      <a>
        查看更多
        <i class="iconfont-arrow-right-big"></i>
      </a>
    </div>
    <ul class="product-main">
      <li class="product-aside">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac5cafc68c10ce4471869d378f594b52.png?thumb=1&w=234&h=614&f=webp&q=90"
          alt=""
        />
      </li>
      <li class="product-item" v-for="(v, k) in new Array(8).keys()" :key="k">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d764150a470174741d8b0b04515f7a78.jpg?thumb=1&w=200&h=200&f=webp&q=90"
          alt=""
        />
        <h2>{{ k }}Redmi 10A</h2>
        <p class="comment">大电量、大音量、大屏幕</p>
        <p class="price">
          <span>649元起</span>
          <del>699元</del>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductListEntity from '@/entity/portal/product-list-entity';
export default {
  name: 'ProductBlockProductShow',
  props: {
    productListEntity: ProductListEntity,
  },
  mounted() {
    console.log(this.productListEntity);
  },
};
</script>

<style lang="scss" scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
h2 {
  padding: 0;
  margin: 0;
}
P {
  margin: 0.8rem;
  padding: 0;
}
.product-header {
  height: 58px;
  line-height: 58px;
  width: 100%;
  h2 {
    float: left;
    font-size: 22px;
    font-weight: 200;
    height: 58px;
    line-height: 58px;
  }
}
.product-header > a {
  height: 58px;
  line-height: 58px;
  float: right;
  font-size: 16px;
  i {
    background: #b0b0b0;
    color: #fff;
    border-radius: 50%;
    width: 12px;
    padding: 4px;
    font-size: 12px;
    height: 12px;
    vertical-align: 1px;
    transition: all 0.2s;
  }
  &:hover {
    color: #ff6700;
    i {
      background: #ff6700;
    }
  }
}
.product-main {
  width: 1226px;
  height: 628px;
  display: grid;
  grid-template-columns: repeat(5, 234px);
  grid-template-rows: repeat(2, 300px);
  gap: 1rem;
  li {
    &:hover {
      box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
      transform: translate3d(0, -2px, 0);
    }
    transition: all 0.2s linear;
    width: 234px;
  }
}
.product-aside {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: white;
  height: 614px;
  img {
    height: 614px;
  }
}
.product-item {
  height: 300px;
  background-color: white;
  font-size: 1rem;
  text-align: center;
  img {
    width: 70%;
    padding: 10px;
  }
  h2 {
    font-size: 1rem;
  }
  .comment {
    color: #b0b0b0;
  }
  .price {
    span {
      color: #ff6700;
    }
    del {
      margin-left: 8px;
      color: #b0b0b0;
    }
  }
}
</style>

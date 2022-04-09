<template>
  <div class="banner-bottom">
    <div class="help">
      <ul>
        <li class="item" v-for="(v, k) in new Array(6)" :key="k">
          <div>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
              alt=""
            />
            <span>{{ k }}保障服务</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="ad">
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ab8e5096ac6f08bd632e4d5a15d1792.jpg?w=632&h=340"
        alt=""
      />
    </div>
    <div class="ad">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5f019908e21571fe48fdad0ebf79249.jpg?w=632&h=340"
        alt=""
      />
    </div>
    <div class="ad">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c13d0d11b38ec17fa5d83bc6ba5912.jpg?w=632&h=340"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerBottom',
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ad {
  &:hover {
    box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
    transition: box-shadow 0.2s;
  }
}
.banner-bottom {
  display: flex;
  justify-content: space-between;
  height: 170px;
  width: 100%;
  & > div {
    width: 316px;
  }
  & > div:first-of-type {
    width: 229px;
  }
}
.help {
  background-color: #5f5750;
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;
}
.item {
  width: 76px;
  height: 80px;
  font-size: 0.875rem;
  color: white;
  opacity: 0.6;
  width: 33.3333%;
  text-align: center;
  position: relative;
  &:hover {
    opacity: 1;
    transition: opacity 0.2s;
  }
  div {
    width: 100%;
    height: 100%;
    &::before,
    &::after {
      position: absolute;
      content: '';
      background: #665e57;
    }
    &::before {
      left: 1%;
      top: 5%;
      width: 1px;
      height: 70px;
    }
    &::after {
      left: 6%;
      bottom: 0;
      width: 70px;
      height: 1px;
    }
  }

  img {
    width: 24px;
    height: 24px;
    padding: 1.6rem 0 0 0;
  }
  span {
    display: block;
  }
  display: inline-block;
}
img {
  width: 316px;
}
</style>

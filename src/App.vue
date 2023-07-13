<template>
  <div>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!-- <router-link to="/">Go to Home</router-link><br> -->
    <!-- <router-link to="/about">Go to About</router-link> -->
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
// import { isMobileOrPc } from "./utils/utils";

// 移动端 rem 单位适配
// if (isMobileOrPc()) {
//   // width * 100 / 750 = width / 7.5
//   // 1rem = 100px
//   var width = window.screen.width;
//   window.document.getElementsByTagName("html")[0].style.fontSize =
//     width / 7.5 + "px";
// }

export default defineComponent({
  name: "Home",
  components: {
    Header: defineAsyncComponent(() => import("./components/Header.vue")),
    Footer: defineAsyncComponent(() => import("./components/Footer.vue")),
  },
  setup() {
    return {};
  },
});
</script>
  
<style>
@import url(./styles/index.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
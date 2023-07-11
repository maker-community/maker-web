<template>
  <div>
    <div class="common-layout">
      <el-container>
        <Header>Header1</header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
    <h2>{{ msg }}</h2>
    <h2 class="qqq">{{ count }}</h2>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent,defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    Header: defineAsyncComponent(() => import("../components/Header.vue")),
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
  },
  setup() {
    const msg = ref("Hello");
    const count = ref(710);

    return {
      msg,
      count,
    };
  },
});
</script>

<style lang="less" scoped>
.qqq {
  // background: red;
}
</style>
<template>
  <div>
    <div class="common-layout">
      <div class="home">
        <h1>The Blazor Component Library You always wanted</h1>
        <h6>
          Trusted by thousands of users, from hobby developers to large
          enterprises. Use MudBlazor to rapidly build amazing web applications
          without leaving your loved C# language and toolchain.
        </h6>
      </div>
      <div>
        <!-- <el-icon><MoonNight /></el-icon> -->
      </div>
    </div>
    <!-- <h2>{{ msg }}</h2>
    <h2 class="qqq">{{ count }}</h2>
    <el-button type="primary">按钮</el-button> -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
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
.home {
  h1{
    font-size: 50px;
  }
}
</style>
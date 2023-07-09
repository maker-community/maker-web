<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2 class="qqq">{{ count }}</h2>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = ref("Hello");
const count = ref(710);
</script>

<style lang="less" scoped>
.qqq{
  background: red;
}
</style>
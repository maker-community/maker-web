
<template>
  <div class="footer">
    <el-text size="large" tag="b"
      >创客空间 ©2020 Created by Gil Zhang</el-text
    >
    <div>
      <el-link
        :underline="false"
        href="https://github.com/maker-community"
        target="_blank"
      >
      Join in Hacker space</el-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>

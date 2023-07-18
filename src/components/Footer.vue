
<template>
  <div class="footer">
    <div class="skew-background">
      <div class="footer-content">
        <el-text size="large" tag="b"
          >创客空间 ©2020 Created by Gil Zhang</el-text
        >
        <br />
        <el-link
          :underline="false"
          href="https://github.com/maker-community"
          target="_blank"
        >
          Join in Hacker space</el-link
        >
      </div>
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
 /* height: 25rem;
 overflow: hidden; */
}
.skew-background {
   text-align: center;
  background-color: var(--el-color-primary-light-9);
  transform: skewY(350deg);
  padding-top: 9rem;
  height: 10rem;
}
.footer-content{
   transform: skewY(10deg);
  background-color: var(--el-color-primary-light-9);
  /* height: 18rem; */
}
</style>

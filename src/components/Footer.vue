
<template>
  <div class="footer">
    <el-text size="large" tag="b">创客空间全栈修炼 ©2018 Created by BiaoChenXuYing</el-text>
    <div class="number">
      <a href="http://www.beian.miit.gov.cn" target="_blank"
        >粤ICP备18141506号</a
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

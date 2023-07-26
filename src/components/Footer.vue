
<template>
  <div class="footer">
    <div class="skew-background">
      <div class="footer-content">
        <p>
          <el-icon :size="35"><PictureRounded /></el-icon>
          <el-text size="large" tag="b" style="line-height: 20px">{{
            $t("header.logo")
          }}</el-text>
        </p>
        <el-row :gutter="30" justify="space-between" align="middle">
          <el-col :sm="8">
            <p><el-text tag="b">联系我们</el-text></p>
            <el-icon :size="20"><Message /></el-icon>
            <el-text>maker-community@foxmail.com</el-text>
          </el-col>
          <el-col :sm="8">
            <p><el-text tag="b">关注我们</el-text></p>
            <el-icon :size="20"><Message /></el-icon>
            <el-text>（放b站头像）</el-text>
          </el-col>
          <el-col :sm="8">
            <p><el-text tag="b">加入我们</el-text></p>
            <el-icon :size="20"><Message /></el-icon>
            <el-text>（放qq群）</el-text>
          </el-col> </el-row
        ><br />
        <el-text size="large" tag="b"
          >Copyright ©2022-2023 Created by Maker-community</el-text
        >
        <br />
        <!-- <el-link
          :underline="false"
          href="https://github.com/maker-community"
          target="_blank"
        >
          Join in Hacker space</el-link
        > -->
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

<style scoped lang="scss">
.skew-background {
  text-align: center;
  background-color: var(--el-color-primary-light-9);
  transform: skewY(350deg);
  margin-top: 10rem;
}
.footer-content {
  transform: skewY(10deg);
  text-align: left;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 2rem;
  .el-icon,
  .el-text {
    vertical-align: middle;
  }
  .el-icon {
    margin-right: 0.8rem;
  }
  .el-col {
    padding-bottom: 1rem;
  }
}
</style>

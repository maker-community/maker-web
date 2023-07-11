<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <!-- <img class="logo" src="../assets/logo.jpg" alt="" /> -->
      <div>创客空间</div>
      <div class="flex-grow" />
      <el-menu-item index="0">详情</el-menu-item>
      <el-menu-item index="1">其他</el-menu-item>
      <!-- <el-divider direction="vertical" /> -->
      <el-sub-menu index="2">
        <template #title>
          <svg-icon name="translate" style="width: 15px;"></svg-icon>
        </template>
        <el-menu-item index="2-1">简体中文</el-menu-item>
        <el-menu-item index="2-2">English</el-menu-item>
      </el-sub-menu>
      <!-- <el-menu-item index="3">相关信息</el-menu-item> -->
      <!-- <el-menu-item index="4">相关信息</el-menu-item> -->

      <!-- <el-divider direction="vertical" /> -->
      <el-switch v-model="mode" />
      <!-- <el-divider direction="vertical" /> -->
      <svg-icon name="github" class="githubIcon"></svg-icon>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Check, Close } from "@element-plus/icons-vue";

export default defineComponent({
  name: "Header",
  setup() {
    const mode = ref(true);
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    return {
      mode,
      handleSelect,
      Check,
      Close,
    };
  },
});
</script>

<style scoped>
.el-menu-demo {
  align-items: center;
  padding: 0 40px;
}
.flex-grow {
  flex-grow: 1;
}
.el-switch {
  margin: 0 28px 0 7px;
}
</style>

<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <!-- <img class="logo" src="../assets/logo.jpg" alt="" /> -->
      <el-text size="large" tag="b">创客空间</el-text>

      <div class="flex-grow" />
      <el-menu-item index="0">详情</el-menu-item>
      <el-menu-item index="1">其他</el-menu-item>
      <!-- <el-divider direction="vertical" /> -->
      <el-sub-menu index="2">
        <template #title>
          <el-link :underline="false">
            <el-icon :size="16">
              <svg-icon name="translate"></svg-icon> </el-icon
          ></el-link>
        </template>
        <el-menu-item index="2-1">简体中文</el-menu-item>
        <el-menu-item index="2-2">English</el-menu-item>
      </el-sub-menu>
      <!-- <el-menu-item index="3">相关信息</el-menu-item> -->
      <!-- <el-menu-item index="4">相关信息</el-menu-item> -->

      <!-- <el-divider direction="vertical" /> -->
      <el-switch v-model="isDark" @change="toggleDark" />
      <!-- <el-divider direction="vertical" /> -->
      <el-link
        :underline="false"
        href="https://github.com/maker-community"
        target="_blank"
      >
        <el-icon :size="20">
          <svg-icon name="github" class="githubIcon"></svg-icon>
        </el-icon>
      </el-link>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDark, useToggle } from "@vueuse/core";

export default defineComponent({
  name: "Header",
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    return {
      isDark,
      handleSelect,
      toggleDark,
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
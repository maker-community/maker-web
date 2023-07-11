<template>
  <div class="header-content">
    <el-row :gutter="2" align="middle">
      <el-col :span="3">
        <router-link to="/">
          <!-- <img class="logo" src="../assets/logo.jpg" alt="" /> -->
          创客空间
        </router-link>
      </el-col>

      <el-col :span="15">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <div class="flex-grow" />
          <el-menu-item index="0">详细介绍</el-menu-item>
          <el-menu-item index="1">相关信息</el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <edit style="width: 26px; height: 26px" />
            </template>
            <el-menu-item index="2-1">简体中文</el-menu-item>
            <el-menu-item index="2-2">English</el-menu-item>
          </el-sub-menu>
          <!-- <el-menu-item index="3">相关信息</el-menu-item> -->
          <!-- <el-menu-item index="4">相关信息</el-menu-item> -->
        </el-menu>
      </el-col>

      <el-divider direction="vertical" />
      <el-col :span="1">
        <el-switch v-model="mode" />
      </el-col>

      <el-divider direction="vertical" />
      <svg-icon name="github" />
    </el-row>
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

<style>
.flex-grow {
  flex-grow: 1;
}
.githubIcon {
  width: 22px;
  margin-left: 12px;
}
</style>

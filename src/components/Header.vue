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
      <el-sub-menu index="2" class="locale-menu">
        <template #title>
          <el-link :underline="false">
            <el-icon :size="16">
              <svg-icon name="translate"></svg-icon>
            </el-icon>
          </el-link>
        </template>
        <el-menu-item index="zh" v-if="locale === 'en'">简体中文</el-menu-item>
        <el-menu-item index="en" v-else>English</el-menu-item>
      </el-sub-menu>
      <!-- <el-menu-item index="3">相关信息</el-menu-item>
      <el-menu-item index="4">相关信息</el-menu-item> -->

      <!-- <el-divider direction="vertical" /> -->
      <el-switch v-model="isDark" @change="toggleDark" />
      <!-- <el-divider direction="vertical" /> -->
      <el-link
        :underline="false"
        href="https://github.com/maker-community"
        target="_blank"
      >
        <el-icon :size="20">
          <svg-icon name="github"></svg-icon>
        </el-icon>
      </el-link>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Header",
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const { locale } = useI18n();

    const handleSelect = (key: string, keyPath: string[]) => {
      keyPath[0] === "2" && (locale.value = key);
      //补充：保存上一次的语言或者根据系统语言自动显示
      // localStorage.setItem('lang', lang)

      // console.log("语言", locale.value);
      return locale;
    };

    onMounted(() => {
      // console.log('34',);
    });

    return {
      isDark,
      handleSelect,
      toggleDark,
      locale,
    };
  },
});
</script>

<style scoped lang="scss">
.el-menu-demo {
  align-items: center;
  padding: 0 3.5rem;
  // background: var(--el-color-primary);
}
.flex-grow {
  flex-grow: 1;
}
.el-switch {
  margin: 0 28px 0 7px;
}
.locale-menu::v-deep {
  .el-sub-menu__title {
    border: none;
  }
  .el-sub-menu__title:hover {
    background: none;
  }
}
</style>
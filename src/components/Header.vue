<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <img class="logo" src="../assets/Images/app-icon.png" width="40" height="40" alt="" />
      <!-- <el-icon :size="40"><PictureRounded /></el-icon> -->
      <el-text size="large" tag="b">{{ $t("header.logo") }}</el-text>

      <div class="flex-grow" />
      <el-menu-item index="0">{{ $t("header.menu_detail") }}</el-menu-item>
      <el-menu-item index="1">{{ $t("header.menu_other") }}</el-menu-item>
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
      <!-- <el-menu-item index="3">详细信息</el-menu-item>
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
          <svg-icon name="github" class="githubIcon"></svg-icon>
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
      keyPath[1] === "2" && (locale.value = key);
      localStorage.setItem("lang", key);

      // console.log("语言", key, keyPath);
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
  padding-left: 3rem;
  z-index: 10;
  position: fixed;
  width: 100%;
  background-color:var(--el-menu-bg-color);
}
.flex-grow {
  flex-grow: 0.95;
}
.el-switch {
  margin: 0 28px 0 7px;
}

.locale-menu,
.el-sub-menu__hide-arrow {
  & > :deep .el-sub-menu__title:hover {
    background: none;
  }

  // & > :deep .el-sub-menu__title {
  //   border: none !important;
  // }
}

.logo{
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  margin-right: 4px;
}
</style>
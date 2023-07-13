<template>
  <div>
    <div class="common-layout">
      <div>
        <el-text class="text-title">{{ $t("home.title") }}</el-text>
        <br />
        <el-text size="large" type="info" tag="b">
          Trusted by thousands of users, from hobby developers to large
          enterprises. Use MudBlazor to rapidly build amazing web applications
          without leaving your loved C# language and toolchain.
        </el-text>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style>
.text-title {
  font-size: 4rem;
  font-weight: 700;
}
</style>
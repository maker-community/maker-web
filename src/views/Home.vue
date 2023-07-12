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
      <div>
        <!-- <el-icon><MoonNight /></el-icon> -->
      </div>
    </div>
    <!-- <h2>{{ msg }}</h2>
    <h2 class="qqq">{{ count }}</h2>
    <el-button type="primary">按钮</el-button> -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const msg = ref("Hello");
    const count = ref(710);
    const { t } = useI18n();

    return {
      msg,
      count,
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
<template>
  <div>
    <div class="container">
      <div class="main-text">
        <el-text class="text-title">{{ $t("home.title") }}</el-text>
        <br /><br /><br />
        <el-text size="large" type="info" tag="b"
          >{{ $t("home.subtitle") }}
        </el-text>
        <br /><br />
        <el-button size="large" type="primary">{{
          $t("home.start")
        }}</el-button>
        <el-link
          :underline="false"
          href="https://github.com/maker-community"
          target="_blank"
        >
          <el-button size="large">{{ $t("home.toGithub") }}</el-button>
        </el-link>
      </div>
      <div class="main-image">
        <img src="../assets/Images/HomePage.png" alt="" />
      </div>
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

<style scoped>
.main-text {
  margin-left: 20px;
}
.text-title {
  font-size: 4rem;
  font-weight: 700;
}
.main-image {
  width: 100rem;
  margin-left: 1rem;
  padding: 0.5rem 0.5rem 0.2rem;
  /* animation: spin 5s reverse infinite; */
  background-image: linear-gradient(
    45deg,
    rgba(89, 74, 226, 0.5),
    rgba(255, 64, 129, 0.5) 43%,
    rgba(116, 103, 239, 0.5)
  );
  border-radius: 20px;
}
img {
  width: 100%;
  border-radius: 15px;
}
.el-button+.el-link{
  margin-left: 10px;
}
</style>
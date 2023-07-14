<template>
  <div>
    <div class="container">
      <div>
        <el-text class="text-title">{{ $t("home.title") }}</el-text>
        <br />
        <el-text size="large" type="info" tag="b"
          >{{ $t("home.subtitle") }}
        </el-text>
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

<style>
.text-title {
  font-size: 4rem;
  font-weight: 700;
}
.main-image {
  width: 100rem;
  margin-left: 4rem;
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
</style>
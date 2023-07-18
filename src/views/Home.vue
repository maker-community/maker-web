<template>
  <div style="padding-top: 60px">
    <!-- 标题 -->
    <div class="container">
      <el-row justify="space-between" align="middle">
        <el-col :xl="11" :lg="11" :md="11">
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
          <br /><br />
        </el-col>

        <el-col :xl="12" :lg="12" :md="12">
          <div class="title-image">
            <img src="../assets/Images/HomePage.png" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 特点 -->
    <div class="container">
      <el-row :gutter="30" justify="space-between">
        <el-col :sm="8">
          <el-card>
            <el-icon :size="40"><PictureRounded /></el-icon>
            <br /><br />
            <h2>{{ $t("home_feature.feel") }}</h2>
            <el-text type="info"
              >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxcxxxxxxxx</el-text
            >
          </el-card>
        </el-col>
        <el-col :sm="8">
          <el-card>
            <el-icon :size="40"><PictureRounded /></el-icon>
            <br /><br />
            <h2 size="large" tag="b">{{ $t("home_feature.service") }}</h2>
            <el-text type="info"
              >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxcxxxxxxxx</el-text
            >
          </el-card>
        </el-col>
        <el-col :sm="8">
          <el-card>
            <el-icon :size="40"><PictureRounded /></el-icon>
            <br /><br />
            <h2 size="large" tag="b">{{ $t("home_feature.contact") }}</h2>
            <el-text type="info"
              >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxcxxxxxxxx</el-text
            >
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 内容 -->
    <el-divider style="margin: 0">
      <el-text type="info">{{ $t("home_content.about_product") }}</el-text>
    </el-divider>

    <div class="container">
      <el-row :gutter="20" justify="space-between" align="middle">
        <el-col :xl="10" :lg="10" :md="10">
          <!-- <div class="title-image"> -->
          <img src="../assets/Images/HomePage.png" alt="" />
          <!-- </div> -->
        </el-col>

        <el-col :xl="13" :lg="13" :md="13">
          <el-text style="font-size: 2.5rem; font-weight: 600">
            {{ $t("home_content.electron_bot") }}
          </el-text>
          <br /><br />
          <el-text size="large" type="info"
            >{{ $t("home_content.electron_bot_details") }}
          </el-text>
          <br /><br />
          <el-link
            :underline="false"
            href="https://github.com/maker-community/ElectronBot.DotNet"
            target="_blank"
          >
            <el-text type="primary"
              >{{ $t("home_content.details_link") }}
            </el-text>
          </el-link>
        </el-col>
      </el-row>
    </div>

    <div class="container" style="background-color: var(--el-color-primary-light-9)">
      <el-row :gutter="20" justify="space-between" align="middle">
        <el-col :xl="13" :lg="13" :md="13">
          <el-text style="font-size: 2.5rem; font-weight: 600">
            {{ $t("home_content.eShop") }}
          </el-text>
          <br /><br />
          <el-text size="large" type="info"
            >{{ $t("home_content.eShop_details") }}
          </el-text>
          <br /><br />
          <el-link
            :underline="false"
            href="https://github.com/maker-community/Verdure.eShop"
            target="_blank"
          >
            <el-text type="primary"
              >{{ $t("home_content.details_link") }}
            </el-text>
          </el-link>
        </el-col>

        <el-col :xl="10" :lg="10" :md="10">
          <!-- <div class="title-image"> -->
          <img src="../assets/Images/HomePage.png" alt="" />
          <!-- </div> -->
        </el-col>
      </el-row>
    </div>

    <div class="container">
      <el-row :gutter="20" justify="space-between" align="middle">
        <el-col :xl="10" :lg="10" :md="10">
          <!-- <div class="title-image"> -->
          <img src="../assets/Images/HomePage.png" alt="" />
          <!-- </div> -->
        </el-col>

        <el-col :xl="13" :lg="13" :md="13">
          <el-text style="font-size: 2.5rem; font-weight: 600">
            {{ $t("home_content.electron_bot") }}
          </el-text>
          <br /><br />
          <el-text size="large" type="info"
            >{{ $t("home_content.electron_bot_details") }}
          </el-text>
          <br /><br />
          <el-link
            :underline="false"
            href="https://github.com/maker-community/ElectronBot.DotNet"
            target="_blank"
          >
            <el-text type="primary"
              >{{ $t("home_content.details_link") }}
            </el-text>
          </el-link>
        </el-col>
      </el-row>
    </div>

    <div class="container">
      <el-row :gutter="20" justify="space-between" align="middle">
        <el-col :xl="13" :lg="13" :md="13">
          <el-text style="font-size: 2.5rem; font-weight: 600">
            {{ $t("home_content.eShop") }}
          </el-text>
          <br /><br />
          <el-text size="large" type="info"
            >{{ $t("home_content.eShop_details") }}
          </el-text>
          <br /><br />
          <el-link
            :underline="false"
            href="https://github.com/maker-community/Verdure.eShop"
            target="_blank"
          >
            <el-text type="primary"
              >{{ $t("home_content.details_link") }}
            </el-text>
          </el-link>
        </el-col>

        <el-col :xl="10" :lg="10" :md="10">
          <!-- <div class="title-image"> -->
          <img src="../assets/Images/HomePage.png" alt="" />
          <!-- </div> -->
        </el-col>
      </el-row>
    </div>

    <!-- 加入我们 -->
    <el-divider style="margin: 0">
      <el-text type="info">{{ $t("home_content.join") }}</el-text>
    </el-divider>

    <div class="container">
      <el-row :gutter="20" justify="space-between" align="middle">
        <el-col :xl="10" :lg="10" :md="10">
          <!-- <div class="title-image"> -->
          <img src="../assets/Images/HomePage.png" alt="" />
          <!-- </div> -->
        </el-col>

        <el-col :xl="13" :lg="13" :md="13">
          <el-text style="font-size: 2.5rem; font-weight: 600">
            {{ $t("home_content.electron_bot") }}
          </el-text>
          <br /><br />
          <el-text size="large" type="info"
            >{{ $t("home_content.electron_bot_details") }}
          </el-text>
          <br /><br />
          <el-link
            :underline="false"
            href="https://github.com/maker-community/ElectronBot.DotNet"
            target="_blank"
          >
            <el-text type="primary"
              >{{ $t("home_content.details_link") }}
            </el-text>
          </el-link>
        </el-col>
      </el-row>
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
.text-title {
  font-size: 4rem;
  font-weight: 700;
}
.title-image {
  margin-top: 1rem;
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
.el-button + .el-link {
  margin-left: 1rem;
}
.el-col {
  margin-bottom: 1rem;
}
</style>
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Element Plus组件样式
import 'element-plus/dist/index.css'
// 图标和组件需要分开引入
import { ElButton } from 'element-plus'; 
// import { Edit } from '@element-plus/icons-vue' 

const app = createApp(App)

// 全局注册组件/图标
app.component('ElButton', ElButton)
// app.component('Edit', Edit)

app.use(router).mount("#app");

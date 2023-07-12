<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" />
    <!--  :fill="color" -->
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
    // color: {
    //   type: String,
    //   default: "red",
    // },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>

<style>
.svg-icon{
  width: 22px;
  height: 22px;
}
/* .svg-icon:focus{
  outline: none;
} */
</style>
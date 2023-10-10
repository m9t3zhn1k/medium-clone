<template>
  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="100%" height="100%" class="svg">
    <use :xlink:href="computedLink" :href="computedLink" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvSvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    computedLink(): string {
      return `./assets/icons/${this.icon}.svg#icon`;
    },
  },
});
</script>

<style lang="scss" scoped></style>

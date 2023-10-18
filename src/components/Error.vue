<template>
  <div class="error">{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvError",
  props: {
    message: {
      type: String,
      required: false,
      default: "Something went wrong",
    },
  },
});
</script>

<style lang="scss" scoped>
.error {
  padding: 2rem;
  font-size: 1rem;
}
</style>

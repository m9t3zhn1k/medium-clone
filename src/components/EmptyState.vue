<template>
  <p class="text">There is nothing for you honey.</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvEmptyState",
});
</script>

<style lang="scss" scoped>
.text {
  padding: 2rem;
  font-size: 1rem;
}
</style>

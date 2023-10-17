<template>
  <div class="loading">Fetching data...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvLoading",
});
</script>

<style lang="scss" scoped>
.loading {
  font-size: 1rem;
}
</style>

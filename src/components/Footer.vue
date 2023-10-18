<template>
  <footer class="footer">&copy; 2023</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvFooter",
});
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
  width: 100%;
}
</style>

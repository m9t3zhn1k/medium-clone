<template>
  <McvTopbar></McvTopbar>
  <div class="main">
    <router-view />
  </div>
  <footer class="footer">&copy; 2023</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import McvTopbar from "@/components/Topbar.vue";

export default defineComponent({
  name: "McvApp",
  components: {
    McvTopbar,
  },
});
</script>

<style lang="scss" scoped>
.main {
  flex: 1 1 100%;
}

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

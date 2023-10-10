<template>
  <McvTopbar></McvTopbar>
  <div class="main">
    <router-view />
  </div>
  <McvFooter></McvFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import McvTopbar from "@/components/Topbar.vue";
import McvFooter from "@/components/Footer.vue";

export default defineComponent({
  name: "McvApp",
  components: {
    McvTopbar,
    McvFooter,
  },
});
</script>

<style lang="scss">
.main {
  flex: 1 1 100%;
}
</style>

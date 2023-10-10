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
import { AuthAction } from "@/store/modules/auth";

export default defineComponent({
  name: "McvApp",
  components: {
    McvTopbar,
    McvFooter,
  },
  mounted() {
    this.$store.dispatch(AuthAction.getUser);
  },
});
</script>

<style lang="scss">
.main {
  flex: 1 1 100%;
}
</style>

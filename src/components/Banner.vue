<template>
  <div class="banner-wrapper">
    <h1 class="title">Medium Clone</h1>
    <p class="description">A place to share knowlegde</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvBanner",
});
</script>

<style lang="scss" scoped>
.banner-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #5cb85c;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  color: white;
  font-size: 3rem;
}

.title {
  font-size: 3.5rem;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  font-weight: 700;
}

.description {
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
}
</style>

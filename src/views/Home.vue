<template>
  <p class="banner">BANNER</p>
  <div class="wrapper">
    <section class="content">
      <McvFeed :url="url"></McvFeed>
      <div>POPULAR TAGS</div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import McvFeed from "@/components/Feed.vue";

export default defineComponent({
  name: "McvHome",
  components: {
    McvFeed,
  },
  data() {
    return {
      url: "/articles",
    };
  },
});
</script>

<style lang="scss">
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-color: green;
  color: white;
  font-size: 3rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  padding: 2rem 1rem;
  max-width: 1200px;
}

.content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  width: 100%;
}
</style>

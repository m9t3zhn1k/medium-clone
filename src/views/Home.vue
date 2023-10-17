<template>
  <McvBanner></McvBanner>
  <div class="wrapper">
    <section class="content">
      <McvFeed :url="url"></McvFeed>
      <McvPopularTags></McvPopularTags>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import McvFeed from "@/components/Feed.vue";
import McvPopularTags from "@/components/PopularTags.vue";
import McvBanner from "@/components/Banner.vue";

export default defineComponent({
  name: "McvHome",
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
  },
  data() {
    return {
      url: "/articles",
    };
  },
});
</script>

<style lang="scss">
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

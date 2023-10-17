<template>
  <McvBanner></McvBanner>
  {{ path }}
  <div class="wrapper">
    <section class="content">
      <McvFeed :url="path"></McvFeed>
      <McvPopularTags @changePath="changePath($event)"></McvPopularTags>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import McvFeed from "@/components/Feed.vue";
import McvPopularTags from "@/components/PopularTags.vue";
import McvBanner from "@/components/Banner.vue";
import { HomeGetter, HomeMutation } from "@/store/modules/home";

export default defineComponent({
  name: "McvHome",
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
  },
  computed: {
    path(): string {
      return this.$store.getters[HomeGetter.Path];
    },
  },
  methods: {
    changePath(path: string): void {
      this.$store.commit(HomeMutation.ChangePath, path);
    },
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

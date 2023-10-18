<template>
  <McvBanner></McvBanner>
  <div class="wrapper">
    <section class="content">
      <div>
        <McvTabs :tag="tag" :tab="tab" @change="changeTab($event)"></McvTabs>
        <McvFeed :url="path"></McvFeed>
      </div>
      <McvPopularTags @changeTag="changeTag($event)"></McvPopularTags>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HomeGetter, HomeMutation } from "@/store/modules/home";
import { FeedTab } from "@/enums";
import McvFeed from "@/components/Feed.vue";
import McvPopularTags from "@/components/PopularTags.vue";
import McvBanner from "@/components/Banner.vue";
import McvTabs from "@/components/Tabs.vue";

export default defineComponent({
  name: "McvHome",
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
    McvTabs,
  },
  computed: {
    path(): string {
      return this.$store.getters[HomeGetter.Path];
    },
    tab(): FeedTab {
      return this.$store.getters[HomeGetter.Tab];
    },
    tag(): string {
      return this.$store.getters[HomeGetter.Tag] ?? "";
    },
  },
  methods: {
    changeTab(tab: FeedTab): void {
      if (tab === this.tab) {
        return;
      }

      this.$store.commit(HomeMutation.ChangeFeedTab, tab);
    },
    changeTag(tag: string): void {
      this.$store.commit(HomeMutation.ChangeSelectedTag, tag);
      this.changeTab(FeedTab.Tag);
    },
    changePath(path: string): void {
      this.$store.commit(HomeMutation.ChangePath, path);
    },
  },
  watch: {
    tab(): void {
      switch (this.tab) {
        case FeedTab.Global:
          this.changePath("/articles");
          break;
        case FeedTab.Private:
          this.changePath("/articles/feed");
          break;
        case FeedTab.Tag:
          this.changePath(`/articles?tag=${this.tag}`);
          break;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
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

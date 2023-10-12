<template>
  <div>
    <div v-if="isLoading">Fetching data...</div>
    <div v-if="error">Something went wrong</div>
    <div v-if="feed">
      <div v-for="(article, index) in feed.articles" :key="index">
        <McvArticleCard :article="article"></McvArticleCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FeedAction, FeedGetter } from "@/store/modules/feed";
import { Articles } from "@/models";
import McvArticleCard from "@/components/ArticleCard.vue";

export default defineComponent({
  name: "McvFeed",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  components: {
    McvArticleCard,
  },
  computed: {
    feed(): Articles | null {
      return this.$store.getters[FeedGetter.data];
    },
    isLoading(): boolean {
      return this.$store.getters[FeedGetter.loading];
    },
    error(): string | null {
      return this.$store.getters[FeedGetter.error];
    },
  },
  mounted() {
    this.$store.dispatch(FeedAction.getFeed, this.url);
  },
});
</script>

<style lang="scss"></style>
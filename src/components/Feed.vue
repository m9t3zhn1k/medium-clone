<template>
  <div>
    <McvLoading v-if="isLoading"></McvLoading>
    <McvError v-if="error" :message="error"></McvError>
    <div v-if="feed">
      <div v-for="(article, index) in feed.articles" :key="index">
        <McvArticleCard :article="article"></McvArticleCard>
      </div>
    </div>
    <McvPagination
      :current-page="currentPage"
      :total="feed?.articlesCount ?? 0"
      :limit="limit"
      :url="baseUrl"
    ></McvPagination>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FeedAction, FeedGetter } from "@/store/modules/feed";
import { Articles } from "@/models";
import McvArticleCard from "@/components/ArticleCard.vue";
import McvPagination from "@/components/Pagination.vue";
import McvLoading from "@/components/Loading.vue";
import McvError from "@/components/Error.vue";
import { LIMIT } from "@/helpers";
import queryString from "query-string";

export default defineComponent({
  name: "McvFeed",
  data() {
    return {
      limit: LIMIT,
    };
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  components: {
    McvArticleCard,
    McvPagination,
    McvLoading,
    McvError,
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
    currentPage(): number {
      const page = this.$route.query["page"];
      return page ? +page : 1;
    },
    baseUrl(): string {
      return this.$route.path;
    },
    offset(): number {
      return this.currentPage * this.limit - this.limit;
    },
  },
  watch: {
    currentPage(): void {
      this.fetchFeed();
    },
    url(): void {
      this.fetchFeed();
    },
  },
  mounted() {
    this.fetchFeed();
  },
  methods: {
    fetchFeed(): void {
      const parsedUrl = queryString.parseUrl(this.url);
      const stringifiedParams = queryString.stringify({
        limit: this.limit,
        offset: this.offset,
        ...parsedUrl.query,
      });
      const urlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      this.$store.dispatch(FeedAction.getFeed, urlWithParams);
    },
  },
});
</script>

<style lang="scss"></style>

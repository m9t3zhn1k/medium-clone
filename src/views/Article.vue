<template>
  <div class="wrapper">
    фкешсду
    <!-- <div class="top-content">
      <router-link :to="{ name: 'profile', params: { slug: article.author.username } }">
        <img class="athor-image" :src="article.author.image" alt="User's image" />
      </router-link>
      <div class="author-name-and-publish-date">
        <router-link :to="{ name: 'profile', params: { slug: article.author.username } }">
          <p class="author-name">{{ article.author.username }}</p>
        </router-link>
        <p class="publish-date">{{ article.createdAt }}</p>
      </div>
      <button type="button" class="count">
        {{ article.favoritesCount }}
      </button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArticleAction, ArticleGetter } from "@/store/modules/article";
import { Article } from "@/models";

export default defineComponent({
  name: "McvArticle",
  mounted(): void {
    const slug = this.$route.params["slug"] as string;
    this.$store.dispatch(ArticleAction.GetArticle, { slug });
  },
  computed: {
    article(): Article | null {
      return this.$store.getters[ArticleGetter.Article];
    },
    isLoading(): boolean {
      return this.$store.getters[ArticleGetter.Loading];
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  padding: 2rem 1rem;
  max-width: 1200px;
}
</style>

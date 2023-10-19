<template>
  <div class="wrapper">
    <McvLoading v-if="isLoading" />
    <article v-if="article" class="article">
      <h1 class="title">{{ article.title }}</h1>
      <div class="author">
        <div class="info">
          <router-link :to="{ name: 'profile', params: { slug: article.author.username } }">
            <img class="author-image" :src="article.author.image" alt="User's image" />
          </router-link>
          <div class="author-name-and-publish-date">
            <router-link :to="{ name: 'profile', params: { slug: article.author.username } }">
              <p class="author-name">{{ article.author.username }}</p>
            </router-link>
            <p class="publish-date">{{ article.createdAt }}</p>
          </div>
        </div>

        <div class="actions">
          <button class="follow-button" type="button">Follow {{ article.author.username }}</button>
          <button class="favorite-button" type="button">
            Favorite Article ({{ article.favoritesCount }})
          </button>
        </div>
      </div>
      <p class="content">{{ article.description }}</p>
      <div class="tags-container">
        <div class="tag" v-for="(tag, index) in article.tagList" :key="index">
          {{ tag }}
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArticleAction, ArticleGetter } from "@/store/modules/article";
import { Article } from "@/models";
import McvLoading from "@/components/Loading.vue";

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
  components: {
    McvLoading,
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

.article {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.title {
  margin-top: 10vh;
  font-size: 2.8rem;
  font-weight: 600;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
}

.author {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .author-image {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .author-name-and-publish-date {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    margin-right: 2.5rem;

    .author-name {
      color: #5cb85c;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1;
    }

    .publish-date {
      color: #bbb;
      font-size: 0.8rem;
      font-weight: 300;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .follow-button,
  .favorite-button {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
    opacity: 0.8;
    transition: all 0.3s;
    border: 1px solid transparent;
    line-height: 1.25;
    cursor: pointer;
    user-select: none;

    &:hover {
      opacity: 1;
    }
  }

  .follow-button {
    border-color: #000;
    color: #000;
  }
  .favorite-button {
    border-color: #5cb85c;
    color: #5cb85c;
  }
}
.content {
  font-size: 1.2rem;
  line-height: 1.8rem;
}

.tags-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .tag {
    font-size: 0.8rem !important;
    border: 1px solid #ddd;
    color: #aaa;
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
  }
}
</style>

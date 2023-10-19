<template>
  <article class="wrapper">
    <div class="top-content">
      <router-link :to="{ name: 'profile', params: { slug: article.author.username } }">
        <img class="author-image" :src="article.author.image" alt="User's image" />
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
    </div>
    <h3 class="title">
      {{ article.title }}
    </h3>
    <p class="description">{{ article.description }}</p>
    <div class="bottom-content">
      <router-link :to="{ name: 'articles', params: { slug: article.slug } }">
        <button type="button" class="read-more">Read more</button>
      </router-link>
      <div class="tags-container">
        <div class="tag" v-for="(tag, index) in article.tagList" :key="index">
          {{ tag }}
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Article } from "@/models";

export default defineComponent({
  name: "McvArticleCard",
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.top-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;

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
    flex: 1 1 auto;

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

  .count {
    color: #5cb85c;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
    border: 1px solid #5cb85c;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.3s;

    &:hover {
      background-color: #5cb85c;
      color: #ffffff;
    }
  }
}

.title {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.1;
  width: 100%;
}

.description {
  font-weight: 300;
  color: #999;
  font-size: 1rem;
  width: 100%;
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .read-more {
    font-size: 0.8rem;
    font-weight: 600;
    color: #bbb;
    background-color: transparent;
    border: none;
    cursor: pointer;
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
}
</style>

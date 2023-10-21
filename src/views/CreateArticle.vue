<template>
  <div class="wrapper">
    <McvArticleForm
      :initialData="initialData"
      :isSubmitting="isSubmitted"
      :errors="errors"
      @submit="create($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Article, ArticleCreateParams } from "@/models";
import { ArticleNewGetter, ArticleNewAction } from "@/store/modules/article-new";
import McvArticleForm from "@/components/ArticleForm.vue";

export default defineComponent({
  name: "McvCreateArticle",
  data() {
    return {
      initialData: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },
  components: {
    McvArticleForm,
  },
  methods: {
    create(params: ArticleCreateParams): void {
      this.$store
        .dispatch(ArticleNewAction.CreateArticle, params)
        .then((article: Article) =>
          this.$router.push({ name: "articles", params: { slug: article.slug } })
        );
    },
  },
  computed: {
    isSubmitted(): boolean {
      return this.$store.getters[ArticleNewGetter.Submit];
    },
    errors(): Record<string, string[]> {
      return this.$store.getters[ArticleNewGetter.Error];
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
</style>

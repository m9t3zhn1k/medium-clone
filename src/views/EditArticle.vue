<template>
  <div class="wrapper">
    <McvLoading v-if="isLoading" />
    <McvArticleForm
      v-if="article"
      :initialData="article"
      :isSubmitting="isSubmitted"
      :errors="errors"
      @submit="update($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Article, ArticleUpdateParams } from "@/models";
import { ArticleEditGetter, ArticleEditAction } from "@/store/modules/article-edit";
import McvArticleForm from "@/components/ArticleForm.vue";
import McvLoading from "@/components/Loading.vue";

export default defineComponent({
  name: "McvEditArticle",
  mounted() {
    const slug = this.$route.params["slug"] as string;

    this.$store.dispatch(ArticleEditAction.GetArticle, { slug });
  },
  components: {
    McvArticleForm,
    McvLoading,
  },
  methods: {
    update(data: Pick<ArticleUpdateParams, "data">): void {
      const slug = this.$route.params["slug"] as string;
      const params = {
        data: data,
        slug: slug,
      };
      this.$store
        .dispatch(ArticleEditAction.UpdateArticle, params)
        .then((article: Article) =>
          this.$router.push({ name: "articles", params: { slug: article.slug } })
        );
    },
  },
  computed: {
    article(): Article | null {
      return this.$store.getters[ArticleEditGetter.Article];
    },
    isLoading(): boolean {
      return this.$store.getters[ArticleEditGetter.Loading];
    },
    isSubmitted(): boolean {
      return this.$store.getters[ArticleEditGetter.Submit];
    },
    errors(): Record<string, string[]> {
      return this.$store.getters[ArticleEditGetter.Error];
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

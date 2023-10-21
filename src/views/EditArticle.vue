<template>
  <div class="wrapper">
    EDIT
    <McvArticleForm
      :initialData="initialData"
      :isSubmitting="isLoading"
      :errors="errors"
      @submit="create($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArticleCreateParams } from "@/models";
import { ArticleGetter, ArticleAction } from "@/store/modules/article";
import McvArticleForm from "@/components/ArticleForm.vue";

export default defineComponent({
  name: "McvEditArticle",
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
        .dispatch(ArticleAction.CreateArticle, params)
        .then(() => this.$router.push({ name: "home" }));
    },
  },
  computed: {
    isLoading(): boolean {
      return this.$store.getters[ArticleGetter.Loading];
    },
    errors(): Record<string, string[]> {
      return this.$store.getters[ArticleGetter.Error];
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

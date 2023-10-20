<template>
  <div class="wrapper">
    <McvArticleForm :value="initialValue" :isSubmitting="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import McvArticleForm from "@/components/ArticleForm.vue";

export default defineComponent({
  name: "McvCreateArticle",
  data() {
    return {
      initialValue: {
        title: "",
        description: "",
        body: "",
        tags: "",
      },
    };
  },
  components: {
    McvArticleForm,
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

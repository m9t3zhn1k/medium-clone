<template>
  <McvValidationErrors v-if="errors" :errors="errors" />
  <form class="form" @submit.prevent="submit">
    <input v-model="title" class="input" type="text" placeholder="Title" />
    <input
      v-model="description"
      class="input"
      type="text"
      placeholder="What's this article about?"
    />
    <textarea
      v-model="body"
      class="input textarea"
      type="text"
      placeholder="What's this article's content?"
    ></textarea>
    <input v-model="tags" class="input" type="text" placeholder="Tags" />
    <button class="submit" :disabled="isSubmitting">Publish Article</button>
  </form>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { ArticleFormData } from "@/models/article";
import McvValidationErrors from "@/components/ValidationErrors.vue";

export default defineComponent({
  name: "McvArticleForm",
  data() {
    return {
      title: "",
      description: "",
      body: "",
      tags: "",
    };
  },
  props: {
    initialData: {
      type: Object as PropType<ArticleFormData>,
      required: true,
    },
    isSubmitting: {
      type: Boolean,
      required: true,
    },
    errors: {
      type: Object,
      required: false,
    },
  },
  emits: ["submit"],
  methods: {
    submit(): void {
      const formValue = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tags.split(",").map(tag => tag.trim()),
      };
      this.$emit("submit", formValue);
    },
  },
  components: {
    McvValidationErrors,
  },
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  width: 100%;
  gap: 1rem;

  .input {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.25;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    outline: none;
    transition: border 0.2s ease-in;

    &::placeholder {
      color: #9d9d9d;
    }

    &:focus {
      border: 1px solid rgba(0, 119, 255, 0.5);
    }
  }

  .textarea {
    font: inherit;
    height: 10rem;
  }

  .submit {
    display: inline-block;
    font-weight: normal;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    text-decoration: none;
    background-color: #5cb85c;
    border-color: #5cb85c;
    color: #fff;
    margin-left: auto;
    transition: background-color 0.3s ease-in;

    &:hover {
      background-color: #449d44;
      border-color: #419641;
    }
  }
}
</style>

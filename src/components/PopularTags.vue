<template>
  <div v-if="tags.length" class="tags-wrapper">
    <button v-for="tag in tags" :key="tag" type="button" class="tag-item">{{ tag }}</button>
  </div>
  <McvLoading v-if="isLoading"></McvLoading>
  <McvError v-if="error" :message="error"></McvError>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TagAction, TagGetter } from "@/store/modules/tag";
import { Tag } from "@/models";
import McvLoading from "@/components/Loading.vue";
import McvError from "@/components/Error.vue";

export default defineComponent({
  name: "McvPopularTags",
  mounted() {
    this.$store.dispatch(TagAction.getTags);
  },
  computed: {
    isLoading(): boolean {
      return this.$store.getters[TagGetter.loading];
    },
    tags(): Tag[] {
      return this.$store.getters[TagGetter.data];
    },
    error(): string | null {
      return this.$store.getters[TagGetter.error];
    },
  },
  components: {
    McvLoading,
    McvError,
  },
});
</script>

<style lang="scss" scoped>
.tags-wrapper {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  align-items: flex-start;
  height: min-content;
}

.tag-item {
  background-color: #818a91;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  white-space: nowrap;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #687077;
  }
}
</style>

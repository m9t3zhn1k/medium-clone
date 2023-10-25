<template>
  <button
    type="button"
    class="button-favorites"
    @click.prevent="favoriteStatusChanged"
    :disabled="isUpdatingFavoriteStatus"
    :class="isFavorited ? 'favorite' : ''"
  >
    {{ count }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvFavorites",
  props: {
    isFavorited: {
      type: Boolean,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    isUpdatingFavoriteStatus: {
      type: Boolean,
      required: true,
    },
  },
  emit: ["clickFavorite"],
  methods: {
    favoriteStatusChanged(): void {
      this.$emit("clickFavorite");
    },
  },
});
</script>

<style lang="scss" scoped>
.button-favorites {
  color: #5cb85c;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  border: 1px solid #5cb85c;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s;

  &:hover,
  &.favorite {
    background-color: #5cb85c;
    color: #ffffff;
  }
}
</style>

<template>
  <button
    type="button"
    class="button-favorites"
    @click.prevent="favoriteStatusChanged"
    :disabled="isUpdatingFavoriteStatus"
    :class="isFavorited ? 'favorite' : ''"
  >
    <span class="icon"><McvIcon icon="heart"></McvIcon></span>{{ count }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import McvIcon from "@/components/Icon.vue";

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
  components: {
    McvIcon,
  },
});
</script>

<style lang="scss" scoped>
.button-favorites {
  display: flex;
  align-items: center;
  gap: 0.25rem;
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

  .icon {
    display: inline-block;
    height: 0.875rem;
    width: 0.875rem;
  }
}
</style>

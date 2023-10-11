<template>feed</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FeedAction } from "@/store/modules/feed";

export default defineComponent({
  name: "McvFeed",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$store.dispatch(FeedAction.getFeed, this.url);
  },
});
</script>

<style lang="scss"></style>

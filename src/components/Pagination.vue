<template>
  <ul class="container">
    <li class="page" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
      <router-link :to="{ path: url, query: { page } }">{{ page }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvPagination",
  props: {
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    pages(): number[] {
      const count = Math.ceil(this.total / this.limit);
      const pages = new Array(count).fill("").map((_, index) => index + 1);
      return pages;
    },
  },
});
</script>

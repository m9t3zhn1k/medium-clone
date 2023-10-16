<template>
  <ul class="container">
    <template v-if="!isNearestPagesIncludesFirst">
      <li class="page-button">
        <router-link
          :to="{ path: url, query: { page: firstPage } }"
          class="page-link"
          @click="changePage(firstPage)"
        >
          {{ firstPage }}
        </router-link>
      </li>
    </template>
    <div v-if="isIntervalBetweenFirstAndNearestPages" class="interval">...</div>
    <li class="page-button" v-for="page in nearestPages" :key="page">
      <router-link
        :to="{ path: url, query: { page } }"
        class="page-link"
        :class="{ active: currentPage === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </router-link>
    </li>
    <div v-if="isIntervalBetweenLastAndNearestPages" class="interval">...</div>
    <template v-if="!isNearestPagesIncludesLast">
      <li class="page-button">
        <router-link
          :to="{ path: url, query: { page: lastPage } }"
          class="page-link"
          @click="changePage(lastPage)"
        >
          {{ lastPage }}
        </router-link>
      </li>
    </template>
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
  methods: {
    changePage(page: number): void {
      this.$emit("changePage", page);
    },
  },
  computed: {
    pages(): number[] {
      const count = Math.ceil(this.total / this.limit);
      const pages = new Array(count).fill("").map((_, index) => index + 1);

      return pages;
    },
    nearestPages(): number[] {
      const padding = 2;
      const nearest: number[] = [];

      this.pages.forEach((page, index) => {
        const isNearCurrent =
          index >= this.currentPage - padding - 1 && index <= this.currentPage + padding - 1;
        if (isNearCurrent) {
          nearest.push(page);
        }
      });

      return nearest;
    },
    firstPage(): number {
      return this.pages[0];
    },
    lastPage(): number {
      const length = this.pages.length;
      return this.pages[length - 1];
    },
    isNearestPagesIncludesFirst(): boolean {
      const firstPage = this.firstPage;
      return firstPage ? this.nearestPages.includes(firstPage) : false;
    },
    isNearestPagesIncludesLast(): boolean {
      const lastPage = this.lastPage;
      return lastPage ? this.nearestPages.includes(lastPage) : false;
    },
    isIntervalBetweenFirstAndNearestPages(): boolean {
      return this.nearestPages[0] - 1 > this.firstPage;
    },
    isIntervalBetweenLastAndNearestPages(): boolean {
      return this.nearestPages[this.nearestPages.length - 1] - 1 < this.lastPage;
    },
  },
});
</script>

<style lang="scss">
.container {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.page-button {
  height: 2rem;
  width: 2rem;
  border-radius: 0.75rem;
}

.page-link {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  color: #5cb85c;
  transition: all 0.3s;

  &:hover,
  &.active {
    color: #fff;
    background-color: #5cb85c;
  }

  &.active:hover {
    background-color: #5cb75ccc;
  }
}

.interval {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 2rem;
  width: 2rem;
  color: #5cb85c;
}
</style>

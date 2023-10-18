<template>
  <ul class="tabs">
    <li v-if="user">
      <button
        class="tab"
        :class="{ active: tab === feedTabT.Private }"
        @click="changeTab(feedTabT.Private)"
      >
        Your Feed
      </button>
    </li>
    <li>
      <button
        class="tab"
        :class="{ active: tab === feedTabT.Global }"
        @click="changeTab(feedTabT.Global)"
      >
        Global Feed
      </button>
    </li>
    <li v-if="tab === feedTabT.Tag">
      <button class="tab active">#{{ tag }}</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { FeedTab } from "@/enums";
import { AuthGetter } from "@/store/modules/auth";
import { User } from "@/models";

export default defineComponent({
  name: "McvTabs",
  emits: ["change"],
  props: {
    tag: {
      type: String,
      required: true,
    },
    tab: {
      type: String as PropType<FeedTab>,
      required: true,
    },
  },
  methods: {
    changeTab(mode: FeedTab): void {
      this.$emit("change", mode);
    },
  },
  computed: {
    feedTabT(): typeof FeedTab {
      return FeedTab;
    },
    user(): User | null {
      return this.$store.getters[AuthGetter.User];
    },
  },
});
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
}

.tab {
  color: inherit;
  font-size: inherit;
  font: inherit;
  background: transparent;
  padding: 0.5em 1em;
  color: #aaa;
  transition: all 0.3s;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #555;
  }

  &.active {
    color: #5cb85c;
    border-bottom: 2px solid #5cb85c;
  }
}
</style>

<template>
  <ul class="messages">
    <li class="message" v-for="message in errorMessages" :key="message">
      {{ message }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "McvValidationErrors",
  props: {
    errors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages(): string[] {
      return Object.keys(this.errors).map(key => {
        const messages = this.errors[key].join(", ");
        return `${key} ${messages}`;
      });
    },
  },
});
</script>

<style scoped lang="scss">
.messages {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.message {
  color: #b85c5c;
  font-weight: bold;
}
</style>

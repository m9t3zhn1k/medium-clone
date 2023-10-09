<template>
  <header class="header">
    <p><router-link :to="{ name: 'home' }">Medium Clone</router-link></p>
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <a class="nav-link"><router-link :to="{ name: 'home' }">Home</router-link></a>
        </li>
        <template v-if="!currentUser">
          <li class="nav-item">
            <a class="nav-link"><router-link :to="{ name: 'login' }">Sign in</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link :to="{ name: 'register' }">Sign up</router-link></a>
          </li>
        </template>
        <template v-if="currentUser">
          <li class="nav-item">
            <a class="nav-link">
              <router-link :to="{ name: 'login' }">New Article</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link :to="{ name: 'login' }">
                <McvSvgIcon icon="settings"></McvSvgIcon> &nbsp; Settings
              </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link :to="{ name: 'login', params: { slug: currentUser.username } }">
                <img :src="currentUser.image" alt="User" /> &nbsp; {{ currentUser.username }}
              </router-link>
            </a>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { User } from "@/models";
import { defineComponent } from "vue";
import McvSvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  name: "McvTopbar",
  components: { McvSvgIcon },
  computed: {
    currentUser(): User | null {
      return this.$store.state.auth.user;
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1200px;
  width: 100%;
}

.header {
  .nav-list {
    display: flex;
    gap: 1.5rem;
  }

  .nav-item {
    color: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;

    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>

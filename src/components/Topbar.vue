<template>
  <header class="header">
    <router-link :to="{ name: 'home' }">Medium Clone</router-link>
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }" exact-active-class="active">
            Home
          </router-link>
        </li>
        <template v-if="!currentUser">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }" active-class="active">
              Sign in
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }" active-class="active">
              Sign up
            </router-link>
          </li>
        </template>
        <template v-if="currentUser">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'new-article' }" active-class="active">
              New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'settings' }" active-class="active">
              <!-- <McvSvgIcon class="icon" icon="settings"></McvSvgIcon> -->Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'profile', params: { slug: currentUser.username } }"
              active-class="active"
            >
              <img class="user-image" :src="currentUser.image" alt="User" />
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { User } from "@/models";
import { defineComponent } from "vue";
import { AuthGetter } from "@/store/modules/auth";
// import McvSvgIcon from "@/components/SvgIcon.vue";

export default defineComponent({
  name: "McvTopbar",
  components: {
    /* McvSvgIcon */
  },
  computed: {
    currentUser(): User | null {
      return this.$store.getters[AuthGetter.user];
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
      color: rgba(0, 0, 0, 0.6);
    }

    &:has(.active) {
      color: rgba(0, 0, 0, 0.8);
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .icon {
      height: 1rem;
      width: 1rem;
    }
  }
}

.user-image {
  height: 1.5rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
}
</style>

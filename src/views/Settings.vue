<template>
  <div class="wrapper" v-if="currentUser">
    <h1 class="heading">Settings</h1>
    <McvValidationErrors v-if="errors" :errors="errors" />
    <form class="form" @submit.prevent="updateUser">
      <input v-model="form.username" class="input" type="text" placeholder="Username" />
      <input v-model="form.email" class="input" type="text" placeholder="Email" />
      <input v-model="form.image" class="input" type="text" placeholder="Image" />
      <textarea
        v-model="form.bio"
        class="input textarea"
        type="text"
        placeholder="Short bio about you"
      ></textarea>
      <input v-model="form.password" class="input" type="password" placeholder="New password" />
      <button class="submit" :disabled="isSubmitting">Update</button>
    </form>
    <hr />
    <button type="button" class="logout" @click.prevent="logout">Logout</button>
  </div>
  <McvLoading v-if="!currentUser" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SettingsGetter } from "@/store/modules/settings";
import { AuthAction, AuthGetter } from "@/store/modules/auth";
import { User } from "@/models";
import McvValidationErrors from "@/components/Error.vue";
import McvLoading from "@/components/Loading.vue";

export default defineComponent({
  name: "McvSettings",
  data() {
    return {
      form: { username: "", email: "", image: "", bio: "", password: "" },
    };
  },
  computed: {
    isSubmitting() {
      return this.$store.getters[SettingsGetter.Submit];
    },
    errors() {
      return this.$store.getters[SettingsGetter.Errors];
    },
    currentUser(): User | null {
      return this.$store.getters[AuthGetter.User];
    },
  },
  methods: {
    updateUser(): void {
      const params = this.form;
      this.$store.dispatch(AuthAction.update, params).then();
    },
    logout(): void {
      this.$store.dispatch(AuthAction.logout).then(() => this.$router.push({ name: "home" }));
    },
  },
  watch: {
    currentUser(): void {
      if (this.currentUser) {
        this.form.username = this.currentUser.username;
        this.form.email = this.currentUser.email;
        this.form.bio = this.currentUser.bio ?? "";
        this.form.image = this.currentUser.image;
      }
    },
  },
  components: {
    McvValidationErrors,
    McvLoading,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  padding: 2rem 1rem;
  max-width: 34rem;
}

.heading {
  font-size: 2.5rem;
  font-weight: 500;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  .input {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.25;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    outline: none;

    &::placeholder {
      color: #9d9d9d;
    }

    &:focus {
      border: 1px solid rgba(0, 119, 255, 0.5);
    }
  }

  .textarea {
    height: 10rem;
    resize: none;
    font: inherit;
  }

  .submit {
    display: inline-block;
    font-weight: normal;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    text-decoration: none;
    background-color: #5cb85c;
    border-color: #5cb85c;
    color: #fff;
    margin-left: auto;
    transition: background-color 0.3s ease-in;

    &:hover {
      background-color: #449d44;
      border-color: #419641;
    }
  }
}

.logout {
  display: inline-block;
  line-height: 1.25;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: #b85c5c;
  border-color: #b85c5c;
  margin-right: auto;
}

hr {
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>

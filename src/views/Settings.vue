<template>
  <div class="wrapper">
    <h1 class="heading">Settings</h1>
    <McvValidationErrors :errors="errors"></McvValidationErrors>
    <form v-if="currentUser" class="form" @submit.prevent="updateUser">
      <input v-model="form.username" class="input" type="text" placeholder="Username" />
      <input v-model="form.email" class="input" type="text" placeholder="Email" />
      <input v-model="form.image" class="input" type="text" placeholder="Image" />
      <textarea v-model="form.bio" class="input" type="text" placeholder="Email"></textarea>
      <input v-model="form.password" class="input" type="password" placeholder="Password" />
      <button class="submit" :disabled="isSubmitting">Update</button>
    </form>
    <hr />
    <button type="button" class="logout" @click.prevent="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SettingsGetter } from "@/store/modules/settings";
import { AuthAction, AuthGetter } from "@/store/modules/auth";
import { User } from "@/models";

export default defineComponent({
  name: "McvSettings",
  data() {
    return {
      form: {
        username: "",
        bio: "",
        image: "",
        email: "",
        password: "",
      },
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
      console.log(this.$store.getters[AuthGetter.User]);
      return this.$store.getters[AuthGetter.User];
    },
    // form() {
    //   if (this.currentUser) {
    //     return {
    //       username: this.currentUser.username,
    //       bio: this.currentUser.bio ?? undefined,
    //       image: this.currentUser.image,
    //       email: this.currentUser.email,
    //       password: "",
    //     };
    //   }
    //   return {
    //     username: "",
    //     bio: "",
    //     image: "",
    //     email: "",
    //     password: "",
    //   };
    // },
  },
  methods: {
    updateUser(): void {
      const params = {};
      this.$store.dispatch(AuthAction.update, params).then();
    },
    logout(): void {
      console.log("logout");
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  padding: 2rem 1rem;
  max-width: 1200px;
}

.heading {
  font-size: 2.5rem;
  font-weight: 500;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 540px;
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
    transition: border 0.2s ease-in;

    &::placeholder {
      color: #9d9d9d;
    }

    &:focus {
      border: 1px solid rgba(0, 119, 255, 0.5);
    }
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
</style>

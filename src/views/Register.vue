<template>
  <div class="view-wrapper">
    <h1 class="heading">Sign Up</h1>
    <a class="link"><router-link :to="{ name: 'login' }">Have an account?</router-link></a>
    <!--  Validation errors -->
    <form class="form" @submit.prevent="register">
      <input class="input" type="text" placeholder="Username" />
      <input class="input" type="text" placeholder="Email" />
      <input class="input" type="password" placeholder="Password" />
      <button class="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "McvRegister",
  methods: {
    register: () => {
      console.log("register");
    },
  },
};
</script>

<style lang="scss">
.view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  padding: 2rem 1rem;
  max-width: 1200px;
}

.heading {
  font-size: 2.5rem;
  font-weight: 500;
}

.link {
  color: #5cb85c;

  &:hover {
    text-decoration: underline;
  }
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

    &:hover {
      background-color: #449d44;
      border-color: #419641;
    }
  }
}
</style>

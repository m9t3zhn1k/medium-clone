<template>
  <div class="wrapper">
    <h1 class="heading">Sign Up</h1>
    <p><router-link class :to="{ name: 'login' }">Need an accout?</router-link></p>
    Validation errors
    <form>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "McvRegister",
};
</script>

<style></style>

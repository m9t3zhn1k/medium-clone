<template>
  <header class="header">
    <p>Medium Clone</p>
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <a class="nav-link"><router-link :to="{ name: 'home' }">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link :to="{ name: 'login' }">Sign in</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link :to="{ name: 'register' }">Sign up</router-link></a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="main">
    <router-view />
  </div>
  <footer class="footer">Footer</footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style-type: none;
}

.main {
  flex: 1 1 100%;
}

.header,
.footer {
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
}
</style>

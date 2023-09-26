<template>
  <header class="header">
    <p><router-link :to="{ name: 'home' }">Medium Clone</router-link></p>
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
  <footer class="footer">&copy; 2023</footer>
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
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #373a3c;
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

  .nav-item {
    color: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;

    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
}

.footer {
  justify-content: center;
}
</style>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/treasurehunt">Treasure Hunt</RouterLink>
        <RouterLink to="/phaserexamples">Phaser Examples</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <content>
    <RouterView />
  </content>
</template>

<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
  float:left;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

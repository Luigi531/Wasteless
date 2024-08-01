<template>
  <nav>
    <router-link :to="{ name: 'accueil' }">Accueil</router-link> |
    <router-link :to="{ name: 'stocks' }">Stock</router-link> |
    <router-link :to="{ name: 'repas' }">Repas</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

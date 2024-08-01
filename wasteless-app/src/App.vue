<template>
  <div class="navBar">
    <div class="navMenu">
      <nav class="nav">
        <router-link :to="{ name: 'acceuil' }">Acceuil</router-link> 
        <router-link :to="{ name: 'stocks' }">Stock</router-link> 
        <router-link :to="{ name: 'repas' }">Repas</router-link> 
      </nav>
    </div>
    <div class="navTitle">
      <p>Wasteless!</p>
    </div>
  </div> 
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

.navBar {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 7vh;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navMenu {
  display: flex;
}

.nav {
  display: flex;
}

.nav a {
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  padding: 1.9vh 2.4vw;
  display: flex;
  align-items: center;
  height: 7vh;
  z-index: 1001;
  box-shadow: 1px 0 0 0 #dfb81b;
}

.nav a:hover {
  background-color: #dfb81b;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.navTitle {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.navTitle p {
  color: #ffffff;
  z-index: 1001;
  text-align: center;
  font-weight: bold;
  margin: 0;
}
</style>

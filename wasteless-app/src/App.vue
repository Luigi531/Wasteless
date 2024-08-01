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
  height: 6vh;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navMenu {
  text-align: left;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}

.nav a {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  margin: 0px;
  border-right: solid 1px #dfb81b;
  padding: 10px 15px;
  z-index: 1001;
}

.nav a:hover {
  background-color: #dfb81b;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.navTitle p {
  color: #ffffff;
  z-index: 1001;
  position: relative;
  text-align: center;
  font-weight: bold;
  margin-top: 9.6px; 
}
</style>

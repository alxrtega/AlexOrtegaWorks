<template>
  <div id="app">
    <div id="nav">
      <router-link slot="right" to="/" tag="button">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c2f31;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #1087e9;
}

</style>

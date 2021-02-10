<template>
  <div id="app">
    <div align="center" v-if="$route.fullPath === '/'">
      <img class="pageImg" src="./assets/ao.png" />
      <hr class="title" width="300px" />
    </div>
    <div class="navbar" v-if="$route.fullPath !== '/'">
      <router-link to="/" class="homeButton">Home</router-link>
      <router-link to="bio">Bio</router-link>
      <router-link to="academia">Education</router-link>
      <router-link to="experience">Experience</router-link>
    </div>
    <div align="center">
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </div>
    <div id="bottomPage" align="right">
      <footer-bar />
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import Vue from "vue";
import VuePageTransition from "vue-page-transition";
import FooterBar from "@/components/FooterBar";
Vue.use(VuePageTransition);

export default {
  name: "App",
  components: {
    "footer-bar": FooterBar
  }
};
</script>

<style>
hr.title {
  border: 5px solid #005eca;
  border-radius: 7px;
  box-shadow: 2px 2px 4px #2c2f31;
}

.navbar {
  overflow: hidden;
  background-color: #2c2f31;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a.homeButton {
  background-color: #005eca;
  color: #f2f2f2;
}

.navbar a:hover {
  background: #f2f2f2;
  color: #005eca;
}

body {
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  margin: 0 auto;
}

#app {
  font-family: Trebuchet MS, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 0.25in;
  color: #2c2f31;
  background-color: white;
}

#nav {
  padding: 30px;
  height: 75%;
  width: auto;
}

#nav a {
  font-weight: bold;
  font-size: large;
}

.ident {
  text-indent: 40px;
}

h1 {
  font-size: 50px;
  text-shadow: 3px 3px 5px #5c5e61;
}

h2 {
  text-align: left;
}

h3 {
  text-align: left;
}

.home {
  text-align: left;
  text-shadow: 3px 3px 5px #5c5e61;
}

li {
  text-align: left;
}

img {
  width: 250px;
  height: auto;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #5c5e61;
}

.pageImg {
  width: 150;
  height: auto;
  border-radius: 10%;
}

.box {
  max-width: 600px;
  min-width: 100px;
  box-shadow: 2px 2px 4px #5c5e61;
  padding: 10px;
  border-radius: 12px;
}

.blue {
  background-color: #005eca;
  border: none;
  color: #f2f2f2;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #5c5e61;
}

.green {
  background-color: #4caf50;
  border: none;
  color: #f2f2f2;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #5c5e61;
}

.gray {
  background-color: #cfcdcd;
  color: #2c2f31;
  border: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #5c5e61;
}

.red {
  background-color: #ff0000;
  color: #f2f2f2;
  border: single;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #5c5e61;
}
</style>

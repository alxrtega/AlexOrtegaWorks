<template>
  <div id="app">
    <div align="center" v-if="$route.fullPath === '/'">
      <img class="pageImg" src="./assets/ao.png" />
      <hr class="title" width="300px" />
    </div>
    <div class="navbar" v-if="$route.fullPath !== '/'">
      <router-link to="/" class="homeButton">Home</router-link>
      <router-link to="academia">Academia</router-link>
      <router-link to="bio">Bio</router-link>
      <router-link to="experience">Experience</router-link>
    </div>
    <vue-page-transition name="fade-in-down">
      <div align="center">
        <router-view />
      </div>
    </vue-page-transition>
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
}

/* The navigation bar */
.navbar {
  overflow: hidden;
  background-color: #2c2f31;
  position: fixed; /* Set the navbar to fixed position */
  left: 0; /* Position the navbar at the left of the page */
  bottom: 0;
  width: 100%; /* Full width */
  border-radius: 15px;
}

/* Links inside the navbar */
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

/* Change background on mouse-over */
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
  font-family: Arial, Helvetica, sans-serif;
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

img {
  width: 250px;
  height: auto;
  border-radius: 10%;
}

.pageImg {
  width: 150;
  height: auto;
  border-radius: 10%;
}

.blue {
  /* Blue */

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
}

.gold {
  background-color: #d4b114; /* Gold */
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
}

.green {
  background-color: #4caf50; /* Green */
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
}

.orange {
  /* Orange */
  background-color: #e74f21;
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
}

.gray {
  /* Gray */
  background-color: #cfcdcd;
  color: black;
  border: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.darkgray {
  /* dark gray */
  background-color: #555555;
  color: #f2f2f2;
  border: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.yellow {
  /* Yellow */
  background-color: #ffd000;
  color: #f2f2f2;
  border: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.red {
  /* Red */
  background-color: #ff0000;
  color: #f2f2f2;
  border: none;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.black {
  /* Black */
  background-color: #000000;
  color: #f2f2f2;
  border: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
</style>

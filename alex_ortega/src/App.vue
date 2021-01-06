<template>
  <div id="app" class="full-height">
    <div v-if="$route.fullPath !== '/home'" class="topnav">
      <a class="homeButton" href="/home">Home</a>
      <a href="academia">Academia</a>
      <a href="bio">Bio</a>
      <a href="experience">Experience</a>
    </div>
    <br />
    <vue-page-transition name="overlay-up">
      <router-view />
    </vue-page-transition>
    <div align="right">
      <footer-bar />
    </div>
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
/* Add a black background color to the top navigation */
.topnav {
  background-color: #2c2f31;
  overflow: hidden;
  border-radius: 15px;
  height: 50px;
  width: auto;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #c0c2c4;
  color: #2c2f31;
  transform: scale(1.1);
}

/* Add a color to the active/current link */
.topnav a.homeButton {
  background-color: #4caf50;
  color: white;
}

body {
  margin: 0%;
  width: 100%;
  height: 100%;
}

.full-height {
  height: 100%;
  background: #2c2f31;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 0.25in;
  color: #c0c2c4;
  background-color: #2c2f31;
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

.blue {
  /* Blue */

  background-color: #005eca;
  border: none;
  color: white;
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
  color: white;
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
  color: white;
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
  color: white;
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
  background-color: #e7e7e7;
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
  color: white;
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

.red {
  /* Red */
  background-color: #ff0000;
  color: rgb(255, 255, 255);
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
  color: rgb(255, 255, 255);
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

<template>
  <div id="app">
    <div id="nav">
      <router-link
        to="/"
        v-if="$route.fullPath !== '/'"
        disabled="true"
        class="homeButton"
      >
        Home</router-link
      >
      <router-link
        to="academia/"
        v-if="$route.fullPath !== '/'"
        disabled="true"
        class="blue"
      >
        Academia
      </router-link>
      <router-link
        to="/bio"
        v-if="$route.fullPath !== '/'"
        disabled="true"
        class="yellow"
      >
        Bio
      </router-link>
      <router-link
        to="/experience"
        v-if="$route.fullPath !== '/'"
        disabled="true"
        class="green"
      >
        Experience
      </router-link>
    </div>
    <router-view />
    <div align="right">
      <footer-bar />
    </div>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";

export default {
  name: "App",
  components: {
    "footer-bar": FooterBar
  }
};
</script>
<style>
body {
    margin: 0px;
    padding: 0px;
    width: 100%;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: .25in;
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
}

.homeButton {
  /* Blue */

  background-color: #008cba;
  border: solid;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
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
  background-color: #4CAF50; /* Green */
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

.orange { /* Orange */ 
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

.gray { /* Gray */ 
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

.darkgray { /* dark gray */
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

  .yellow { /* Yellow */
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

  .red { /* Red */
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

  .black { /* Black */
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

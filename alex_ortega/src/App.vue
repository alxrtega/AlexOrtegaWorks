<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-if="$route.fullPath !== '/'" disabled="true" class="button1">Home</router-link><br>
      <router-link to="/bio" v-if="$route.fullPath !== '/'" disabled="true" class="button6">Bio</router-link>
      <router-link to="academia/" v-if="$route.fullPath !== '/'" disabled="true" class="button4">Academia</router-link>
      <router-link to="/experience" v-if="$route.fullPath !== '/'" disabled="true" class="button5">Experience</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
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
  font-size: large;
}

.button1 { /* Blue */
  background-color: #008CBA; 
  border: double;
  color: white;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.button2 { 
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

.button3 { /* Red */ 
  background-color: #f44336; 
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

.button4 { /* Gray */ 
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

.button5 { /* Black */
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

  .button6 { /* Yellow */
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
</style>

<script>

</script>

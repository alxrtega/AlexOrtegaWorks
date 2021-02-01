<template>
  <div>
    <div align="left">
      <h1>I Am Alex,<br />Welcome to my portfolio!</h1>
    </div>
    <div class="box">
      <p align="left">
        I am a problem solver always looking for ways to add value through my
        experience and skills!
      </p>
    </div>
    <h3 class="home">Explore more about me...</h3>
    <br />
    <div align="left">
      <router-link to="academia" class="blue"> Academia </router-link>
      <br />
      <router-link to="bio" class="blue"> Bio </router-link>
      <br />
      <router-link to="experience" class="blue"> Experience </router-link>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 40px;
}
h2 {
  font-size: 24px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
div {
  max-width: 600px;
  min-width: 100px;
}
</style>

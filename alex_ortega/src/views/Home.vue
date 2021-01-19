<template>
  <div>
    <div align="left">
      <h1>Hello, I am<br />Alex Ortega!</h1>
    </div>
    <div class="box">
      <p align="left">
        I am a driven individual that carries experience and skills to
        positively impact other individuals, teams and the enviroment around me.
        This portfolio will showcase the skills that I have learned throughout
        my career as an IT professional and as a Computer Science student.
        Checkout my portfolio as I will informally present myself!
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img alt="App logo" src="../assets/ao.png" />
    <p>
      This app was created to showcase my IT and software development skills.<br /><br>
      Checkout my simple app as I will informally present myself!
    </p>
    <h3>Explore more about me...</h3>
    <ul>
      <li>
        <a href="/academia" class="button4">
          Academia
        </a>
      </li>
      <li>
        <a href="/bio" class="button6">
          Bio
        </a>
      </li>
      <li>
        <a href="/experience" class="button5">
          Experience
        </a>
      </li>
    </ul>
    <h3>Source Code</h3>
    <ul>
      <li>
        <a href="https://github.com/alxrtega/AlexOrtegaPersonalWebsite" target="_blank" rel="noopener" class="button2">
          GitHub
        </a>
      </li>
    </ul>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

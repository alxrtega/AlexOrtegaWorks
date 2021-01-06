<template>
  <div class="hello ">
    <div align="center">
      <img alt="app logo" src="../assets/ao.png" />
    </div>
    <h1>Hello, I am<br>Alex Ortega</h1>
    <p>
      I am a driven individual that carries experience and skills to positively impact other individuals, teams
      and the enviroment around me. This portfolio will showcase the skills that I have learned throughout
      my career as an IT professional and as a Computer Science student. Checkout my portfolio as I will informally present myself.
    </p>
    Thank you!<br>
    <h3>Explore more about me...</h3>
    <ul>
      <li>
        <a href="/academia" class="green">
          Academia
        </a>
      </li>
      <br>
      <li>
        <a href="/bio" class="green">
          Bio
        </a>
      </li>
      <br>
      <li>
        <a href="/experience" class="green">
          Experience
        </a>
      </li>
      <br>
      <li>
        <a href="/test" class="black">
          Testing
        </a>
      </li>
      <br>
    </ul>
    <h3>Contact Me</h3>
    <ul>
      <li>
        <button 
          class="blue"
          @click="$refs.modalName0.openModal()"
        >
          Contact Card
        </button>
      </li>
    </ul>
    <modal ref="modalName0">
      <template v-slot:header>
        <p>Name: Alex Ortega</p>
        <p>Email: alx_ortega@outlook.com</p>
        <div>
          <button class="button red" @click="$refs.modalName0.closeModal()">close</button>
        </div>
      </template>
    </modal>
    <h3>Source Code</h3>
    <ul>
      <li>
        <a
          href="https://github.com/alxrtega/AlexOrtegaPersonalWebsite"
          target="_blank"
          rel="noopener"
          class="dark gray"
        >
          GitHub
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Display",
  components: { Modal },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

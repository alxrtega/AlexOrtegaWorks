<template>
  <div>
    <div align="center">
      <img alt="app logo" src="../assets/ao.png" />
    </div>
    <h1>Hello, I am<br />Alex Ortega</h1>
    <p align="left">
      I am a driven individual that carries experience and skills to positively
      impact other individuals, teams and the enviroment around me. This
      portfolio will showcase the skills that I have learned throughout my
      career as an IT professional and as a Computer Science student. Checkout
      my portfolio as I will informally present myself!
    </p>
    <h3>Explore more about me...</h3>
    <ul>
      <li>
        <router-link to="academia" class="blue"> Academia </router-link>
      </li>
      <br />
      <li>
        <router-link to="bio" class="blue"> Bio </router-link>
      </li>
      <br />
      <li>
        <router-link to="experience" class="blue"> Experience </router-link>
      </li>
      <br />
    </ul>
    <h3>Contact Me</h3>
    <ul>
      <li>
        <button class="green" @click="$refs.modalName0.openModal()">
          Contact Card
        </button>
      </li>
    </ul>
    <modal ref="modalName0">
      <template v-slot:header>
        <p align="left">Name: Alex Ortega</p>
        <p align="left">Email: alx_ortega@outlook.com</p>
        <div>
          <button class="button red" @click="$refs.modalName0.closeModal()">
            close
          </button>
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

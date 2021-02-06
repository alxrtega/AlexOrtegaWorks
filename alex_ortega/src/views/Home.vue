<template>
  <div>
    <div align="left">
      <h1>HELLO,<br />I AM ALEX ORTEGA<br />AND THIS IS MY WEB APP!</h1>
    </div>
    <div align="left">
      <h3 class="home">
        I am a problem solver that is always looking to learn and find ways to
        add value.
      </h3>
    </div>
    <h3 class="home">Check this out...</h3>
    <br />
    <div align="left">
      <router-link to="bio" class="blue"> Bio </router-link>
      <br />
      <router-link to="academia" class="blue"> Education </router-link>
      <br />
      <router-link to="experience" class="blue"> Experience </router-link>
      <br />
      <h3 class="home">Reach out to me...</h3>
      <br />
      <div align="left">
        <button class="button green" @click="$refs.modalName02.openModal()">
          Contact Card</button
        ><br />
        <modal ref="modalName02">
          <template v-slot:header>
            <p align="left">Name: Alex Ortega</p>
            <p align="left">Email: a.ortega6243@gmail.com</p>
            <div>
              <button
                class="button red"
                @click="$refs.modalName02.closeModal()"
              >
                Close
              </button>
            </div>
          </template>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "Display",
  props: {
    msg: String
  },
  components: { Modal }
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

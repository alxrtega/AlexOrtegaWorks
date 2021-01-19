<template>
  <div>
    <hero-bar>
      <h1>Bio</h1>
      <hr class="title" width="300px" />
    </hero-bar>
    <div align="center">
      <img alt="app logo" src="../assets/daffyDuck.png" />
    </div>
    <br />
    <div class="box">
      <h2>Alex Ortega</h2>
      <hr width="300px" align="center" />
      <p align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum
        ad qui provident aliquid in natus eos voluptate molestiae illum! Culpa,
        facilis perspiciatis! Error cumque ad corrupti, voluptatibus, dolore
        ullam accusantium maxime, delectus harum voluptate laborum quis vero
        officiis dolor. Velit iste itaque a amet veritatis sapiente! Veniam,
        commodi ullam.
      </p>
      <div align="left">
        <button class="button green" @click="$refs.modalName02.openModal()">
          Contact Card</button
        ><br />
        <modal ref="modalName02">
          <template v-slot:header>
            <p align="left">Name: Alex Ortega</p>
            <p align="left">Email: alx_ortega@outlook.com</p>
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
import HeroBar from "@/components/HeroBar";

export default {
  components: { Modal, HeroBar }
};
</script>

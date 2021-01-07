<template>
  <div>
    <hero-bar>
      <h1>Academia</h1>
    </hero-bar>
    <h2>The University of Texas at El Paso</h2>
    <hr width="300px" align="left" />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
      asperiores aut quam dolores repudiandae est omnis maiores recusandae
      dignissimos commodi, enim assumenda, laboriosam, aspernatur odio voluptas
      mollitia explicabo illum debitis.
    </p>

    <button class="button darkgray" @click="$refs.modalName00.openModal()">
      Courses</button
    ><br />
    <modal ref="modalName00">
      <template v-slot:header>
        <p>Test00</p>
        <p>Test01</p>
        <div>
          <button class="button red" @click="$refs.modalName00.closeModal()">
            Close
          </button>
        </div>
      </template>
    </modal>

    <p></p>
    <h2>El Paso Community College</h2>
    <hr width="300px" align="left" />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum
      rem atque sint distinctio sequi, quo suscipit quaerat amet est expedita
      asperiores error facere aspernatur minima aliquam voluptatem libero odit!
    </p>

    <button class="button darkgray" @click="$refs.modalName02.openModal()">
      Courses</button
    ><br />
    <modal ref="modalName02">
      <template v-slot:header>
        <p>Test00</p>
        <p>Test01</p>
        <div>
          <button class="button red" @click="$refs.modalName02.closeModal()">
            Close
          </button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import HeroBar from "@/components/HeroBar";
export default {
  components: { Modal, HeroBar },
  computed: {
    heroRouterLinkTo() {
      return "/";
    },
    heroRouterLinkLabel() {
      return "Back";
    }
  }
};
</script>

<style scoped>
div {
  max-width: 600px;
  min-width: 100px;
}
</style>

<template>
  <div>
    <hero-bar>
      <h1>Bio</h1>
    </hero-bar>
    <div align="left">
      <img alt="app logo" src="../assets/daffyDuck.png" />
    </div>
    <p></p>
    <h1>Testing paragragh h1. la la la blah!</h1>
    <hr width="300px" align="left" />

    <p></p>
    <h2>Testing paragraph h2. la la la blah!</h2>
    <hr width="300px" align="left" />

    <p></p>
    <h3>Testing paragraph h3. la la la blah!</h3>
    <hr width="300px" align="left" />

    Floating text...<br />

    <button class="button gold" @click="$refs.modalName0.openModal()">
      Gold</button
    ><br />
    <modal ref="modalName0">
      <template v-slot:header>
        <p>Test00</p>
        <p>Test01</p>
        <div>
          <button class="button red" @click="$refs.modalName0.closeModal()">
            Close
          </button>
        </div>
      </template>
    </modal>

    <button class="button green" @click="$refs.modalName1.openModal()">
      Green</button
    ><br />
    <modal ref="modalName1">
      <template v-slot:header>
        <p>Test10</p>
        <p>Test11</p>
        <div>
          <button class="button red" @click="$refs.modalName1.closeModal()">
            Close
          </button>
        </div>
      </template>
    </modal>

    <button class="button orange" @click="$refs.modalName2.openModal()">
      Orange</button
    ><br />
    <modal ref="modalName2">
      <template v-slot:header>
        <p>Test20</p>
        <p>Test21</p>
        <div>
          <button class="button red" @click="$refs.modalName2.closeModal()">
            Close
          </button>
        </div>
      </template>
    </modal>

    <button class="button gray" @click="$refs.modalName3.openModal()">
      Gray</button
    ><br />
    <modal ref="modalName3">
      <template v-slot:header>
        <p>Test30</p>
        <p>Test31</p>
        <div>
          <button class="button red" @click="$refs.modalName3.closeModal()">
            Close
          </button>
        </div>
      </template>
    </modal>

    <button class="button black" @click="$refs.modalName4.openModal()">
      Black</button
    ><br />
    <modal ref="modalName4">
      <template v-slot:header>
        <p>Test40</p>
        <p>Test41</p>
        <div>
          <button class="button red" @click="$refs.modalName4.closeModal()">
            Close
          </button>
        </div>
      </template>
    </modal>

    <button class="button red" @click="$refs.modalName5.openModal()">Red</button
    ><br />
    <modal ref="modalName5">
      <template v-slot:header>
        <p>Test50</p>
        <p>Test51</p>
        <div>
          <button class="button red" @click="$refs.modalName5.closeModal()">
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
img {
  width: 400px;
  height: auto;
  border-radius: 10%;
}
</style>

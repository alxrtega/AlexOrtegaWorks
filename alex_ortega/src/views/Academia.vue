<template>
  <div>
    <hero-bar>
      <h1>Academia</h1>
      <hr class="title" width="300px" />
    </hero-bar>
    <div class="box">
      <h2>The University of Texas at El Paso</h2>
      <hr width="300px" align="center" />

      <p align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        asperiores aut quam dolores repudiandae est omnis maiores recusandae
        dignissimos commodi, enim assumenda, laboriosam, aspernatur odio
        voluptas mollitia explicabo illum debitis.
      </p>
      <div align="left">
        <button class="button green" @click="$refs.modalName00.openModal()">
          Courses</button
        ><br />
        <modal ref="modalName00">
          <template v-slot:header>
            <ul>
              <li>Test00</li>
              <li>Test01</li>
            </ul>
            <div>
              <button
                class="button red"
                @click="$refs.modalName00.closeModal()"
              >
                Close
              </button>
            </div>
          </template>
        </modal>
      </div>
    </div>
    <br />
    <div class="box">
      <h2>El Paso Community College</h2>
      <hr width="300px" align="center" />

      <p align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        nostrum rem atque sint distinctio sequi, quo suscipit quaerat amet est
        expedita asperiores error facere aspernatur minima aliquam voluptatem
        libero odit!
      </p>
      <div align="left">
        <button class="button green" @click="$refs.modalName01.openModal()">
          Courses</button
        ><br />
        <modal ref="modalName01">
          <template v-slot:header>
            <ul>
              <li>Test00</li>
              <li>Test01</li>
            </ul>
            <div>
              <button
                class="button red"
                @click="$refs.modalName01.closeModal()"
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

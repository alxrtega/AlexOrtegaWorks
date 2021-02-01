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
        Pursuing a Bachelor's Degree in Computer Science with a Concentration
        Software Engineering. The courses have been rewarding thus far. The
        science behind computer components are complex but understanding the
        logic and the structuring help understand the design.
      </p>
      <div align="left">
        <button class="button green" @click="$refs.modalName00.openModal()">
          Related Courses</button
        ><br />
        <modal ref="modalName00">
          <template v-slot:header>
            <ul>
              <li>Software Integration and V&V</li>
              <li>Software Construction</li>
              <li>Software Engineering Design and Implementation</li>
              <li>Advanced Object-Oriented Programming</li>
              <li>Computer Networks</li>
              <li>Programming Languages</li>
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
        Early in my college career I had begun to grow interest in computer
        science because I had a great professor that would motivate and insipire
        through the teachings and assignments.
      </p>
      <div align="left">
        <button class="button green" @click="$refs.modalName01.openModal()">
          Related Courses</button
        ><br />
        <modal ref="modalName01">
          <template v-slot:header>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Discrete Mathematics</li>
              <li>Calculus 1 & 2</li>
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

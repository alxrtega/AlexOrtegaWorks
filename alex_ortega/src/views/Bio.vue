<template>
  <div>
    <hero-bar>
      <h1>Bio</h1>
      <hr class="title" width="300px" />
    </hero-bar>
    <div align="center">
      <img alt="app logo" src="../assets/perfil.jpg" />
    </div>
    <br />
    <div class="box">
      <h2>Alex Ortega</h2>
      <hr width="300px" align="center" />
      <p align="left">
        Hello again, my full name is Alejandro Ortega and I was born in El Paso,
        Texas. El Paso is a border city and the cultural convergence in this
        city is what keeps me intrigued to learn about anything. As a kid I was
        interested to know how certain things worked and why they worked the way
        they did. I guess I never grew out of that because I always want to
        learn and understand the reason why many things work the way they do.<br /><br />
        When I was in High School I was able to be part of the IT program my
        school offered. Through the program I was able to get my A+ and Network+
        certifications. As a senior in High School I had earned the privilege to
        be a student IT technician and I would assist teachers, councelors and I
        would help maintain the computer labs in the school. I was also part of
        the varsity football team and my responsibility as a student athlete was
        to remain eligible by passing all my classes and helping other students
        with the material.<br /><br />
        I've had great mentors throughout my life and that has shaped I carry
        myself and think. One common idea they have all shared with me is that I
        can do anything I set my mind to. I also aspire to positively impact
        others so they can reach their goals. I am just full of gratitude and I
        am ready to keep learning. I am a student for life!
      </p>
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
import HeroBar from "@/components/HeroBar";

export default {
  components: { Modal, HeroBar }
};
</script>

<template>
  <div>
    <hero-bar>
      <h1>
        Test Page
      </h1>
    </hero-bar>
    <p>
      <h1>
        blah blahkjalkdfja;klfj akljf;alkdsjfl;aksdfj als;
      </h1>
    <hr>

    <p>
      <h2>
        blah blahkjalkdfja;klfj akljf;alkdsjfl;aksdfj als;
      </h2>
    <hr>

    <p>
      <h3>
        blasdf 11111111111111111111  ah blahkjalkdfja;klfj akljf;alkdsjfl;aksdfj als;
      </h3>
    <hr>

      al;kjaklsdfj;alfkj ajs;flkajsfl;kdajslkfa
      ;lakjsf;aklja;lkfj;lak
      alskfja;dslkjfa;lj
      la'jd;ajflkajf;lk

    <button class="cybr-btn">Button</button>
    <button class="cybr-btn">Button</button>
    <button class="cybr-btn">Button</button>
    <button class="cybr-btn">Button</button>
    <br>
    <button class="button homeButton" @click="$refs.modalName.openModal()">press me</button>
    <button class="button button2">Green</button>
    <button class="button button3">Orange</button>
    <button class="button button4">Gray</button>
    <button class="button button5">Black</button>
    <button class="button button7">Red</button>

    <modal ref="modalName">
      <template v-slot:header>
        <h3>Modal title</h3>
        <p>Test0</p>
        <p>Test1</p>
        <div>
          <button class="button button7" @click="$refs.modalName.closeModal()">Close</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
// import TitleBar from "@/components/TitleBar"
import HeroBar from "@/components/HeroBar";
// import Tiles from "@/components/Tiles"
//import CardComponent from "../components/CardComponent.vue";
export default {
  name: "Test",
  components: { Modal, HeroBar },
  
}
</script>
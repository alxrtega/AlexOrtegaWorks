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

    <button class="cybr-btn">Button</button>
    <button class="cybr-btn">Button</button>
    <button class="cybr-btn">Button</button>
    <button class="cybr-btn">Button</button>
    <br>
    <button class="button1">Green</button>
    <button class="button button2">Blue</button>
    <button class="button button3">Red</button>
    <button class="button button4">Gray</button>
    <button class="button button5">Black</button>
  </div>
</template>

<script>
// import TitleBar from "@/components/TitleBar"
import HeroBar from "@/components/HeroBar";
// import Tiles from "@/components/Tiles"
//import CardComponent from "../components/CardComponent.vue";
export default {
  components: { HeroBar },
  data() {
    return {
    }
  },
  computed: {
    heroRouterLinkTo () {
      return "/"
    },
    heroRouterLinkLabel () {
      return "Back"
    },
  },
}
</script>
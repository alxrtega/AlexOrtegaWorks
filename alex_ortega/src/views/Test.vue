<template>
  <div>
    <hero-bar>
      {{ heroTitle }}
    </hero-bar>
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
  name: "TaskForm",
  components: { HeroBar },
  data() {
    return {
    }
  },
  computed: {
    titleStack () {
      let lastCrumb
      if (this.isProfileExists) {
        lastCrumb = this.form.title
      } else {
        lastCrumb = "Test Page"
      }
      return [
        "Analyst",
        "Task",
        lastCrumb
      ]
    },
    heroTitle () {
      if (this.isProfileExists) {
        return this.form.title
      } else {
        return "Test Page"
      }
    },
    heroRouterLinkTo () {
      return "/"
    },
    heroRouterLinkLabel () {
      return "Back"
    },
  },
  methods: {

  }
}
</script>
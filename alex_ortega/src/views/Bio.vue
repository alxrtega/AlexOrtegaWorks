<template>
  <div>
    <hero-bar>
      <h1>Bio</h1>
    </hero-bar>
    <div align="left">
      <img alt="app logo" src="../assets/daffyDuck.png" />
    </div>
    <h2>Alex Ortega</h2>
    <hr width="300px" align="left" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est
      assumenda ipsam nobis accusantium aperiam corrupti, ratione, nulla labore
      deleniti repellat nemo officia, nostrum doloribus cumque illum aliquam
      placeat. Doloremque?
    </p>
  </div>
</template>

<script>
import HeroBar from "@/components/HeroBar";
export default {
  components: { HeroBar },
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

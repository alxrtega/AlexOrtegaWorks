<template>
  <div>
    <hero-bar>
      <h1>
        Experience
      </h1>
    </hero-bar>
  </div>
</template>

<script>
import HeroBar from "@/components/HeroBar";
export default {
  components: { HeroBar },
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
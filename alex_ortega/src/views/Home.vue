<template>
  <div class="home">
    <Display msg="Alex Ortega Works" />
  </div>
</template>

<script>
// @ is an alias to /src
import Display from "@/components/Display.vue";

export default {
  name: "Home",
  components: {
    Display
  }
};
</script>

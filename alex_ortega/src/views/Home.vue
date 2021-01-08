<template>
  <div class="home">
    <div align="center">
      <Display />
    </div>
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

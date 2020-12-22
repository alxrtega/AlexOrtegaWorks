<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/daffyDuck.png" />
    <Display msg="Welcome to Alex's Web App" />
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

<template>
  <footer class="footer">
    <div class="level-item"><br />AO {{ year }}</div>
  </footer>
</template>

<script>
import dayjs from "dayjs";
import { mapState } from "vuex";

export default {
  name: "FooterBar",
  computed: {
    year() {
      return dayjs().year();
    },
    ...mapState(["isFooterBarVisible"])
  }
};
</script>

<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__dialog">
        <div class="modal__header">
          <slot name="header" />
          <button
            type="button"
            class="modal__close"
            @click="closeModal()"
          ></button>
        </div>

        <div class="modal__body">
          <slot name="body" />
        </div>

        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false
    };
  },
  methods: {
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }
};
</script>

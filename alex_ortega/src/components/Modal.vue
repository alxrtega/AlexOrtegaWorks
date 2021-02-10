<template>
  <div class="modal" v-if="showModal">
    <div v-if="showModal" class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <hr />
      <div class="modal-body">
        <p align="center">
          <slot name="body"></slot>
        </p>
      </div>
      <div class="modal-footer">
        <button class="red" align="left" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    showModal: Boolean
  },
  methods: {
    closeModal() {
      this.$emit("clicked");
    }
  }
};
</script>
<style>
.modal {
  position: fixed;
  padding-top: -50px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 180px;
  background: white;
  box-shadow: 2px 2px 4px #2c2f31;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}
</style>

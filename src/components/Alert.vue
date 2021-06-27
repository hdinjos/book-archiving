<template>
  <div>
    <div
      v-if="failed"
      class="point-view w-25 alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Warning!</strong> All field must be filled
      <button
        @click="closeAlertFailed"
        type="button"
        class="btn-close"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="success"
      class="point-view w-25 alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>Success!</strong> Perubahan Data Berhasil
      <button
        @click="closeAlertSuccess"
        type="button"
        class="btn-close"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    //take data from module state notification
    failed() {
      return this.$store.state.notification.validation;
    },
    success() {
      return this.$store.state.notification.alertSuccess;
    },
  },
  methods: {
    //call every close alert
    closeAlertFailed() {
      this.$store.commit("notification/setValidation", false);
    },
    closeAlertSuccess() {
      this.$store.commit("notification/setAlertSuccess", false);
    },
  },
  mounted() {
    //hiding alert automatically
    setTimeout(function () {
      this.closeAlertFailed();
    }, 10000);

    setTimeout(function () {
      this.closeAlertSuccess();
    }, 10000);
  },
};
</script>

<style scoped>
.point-view {
  position: fixed;
  right: 0;
  z-index: 1;
  bottom: 10px;
}
</style>
<template>
  <div>
    <div
      v-if="failed"
      style="position: fixed; right: 0; z-index: 1; bottom: 10px"
      class="w-25 alert alert-danger alert-dismissible fade show"
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
      style="position: fixed; right: 0; z-index: 1; bottom: 10px"
      class="w-25 alert alert-success alert-dismissible fade show"
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
    failed() {
      return this.$store.state.notification.validation;
    },
    success() {
      return this.$store.state.notification.alertSuccess;
    },
  },
  methods: {
    closeAlertFailed() {
      this.$store.commit("notification/setValidation", false);
    },
    closeAlertSuccess() {
      this.$store.commit("notification/setAlertSuccess", false);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("notification/setValidation", false);
    }, 5000);

    setTimeout(() => {
      this.$store.commit("notification/setAlertSuccess", false);
    }, 5000);
  },
};
</script>
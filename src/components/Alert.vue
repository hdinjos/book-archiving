<template>
  <div>
    <div
      style="position: absolute; right: 0; z-index: 10; bottom: 10px"
      class="w-25 alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Warning!</strong> All field must be filled
      <button
        @click="closeAlert"
        type="button"
        class="btn-close"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeAlert() {
      this.$store.commit("notification/setValidation", false);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("notification/setValidation", false);
    }, 5000);
  },
};
</script>
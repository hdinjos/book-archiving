<template>
  <div
    class="modal fade"
    id="modalDelete"
    tabindex="-1"
    aria-labelledby="modalDeleteLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-warning" id="modalDeleteLabel">
            Warning!
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h4>Do you want to delete this book?</h4>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Back
          </button>
          <button
            @click="deleteBook"
            data-bs-dismiss="modal"
            type="button"
            class="btn btn-primary"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteBook() {
      //is success
      this.$store.commit("notification/setAlertSuccess", true);
      this.$store.commit("deleteBook");
    },
  },
};
</script>

<style>
</style>
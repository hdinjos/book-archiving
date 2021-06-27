<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Book</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">{{ title }}</div>
          <FormInput />
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
            @click="UpdateBook"
            data-bs-dismiss="modal"
            type="button"
            class="btn btn-primary"
            :disabled="isValidEdit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput";
export default {
  components: {
    FormInput,
  },
  computed: {
    title() {
      return this.$store.getters["formInput/getTitle"];
    },
    author() {
      return this.$store.getters["formInput/getAuthor"];
    },
    publisher() {
      return this.$store.getters["formInput/getPublisher"];
    },
    publicationYear() {
      return this.$store.getters["formInput/getPublicationYear"];
    },
    print() {
      return this.$store.getters["formInput/getPrint"];
    },
  },
  methods: {
    UpdateBook() {
      if (
        this.title &&
        this.author &&
        this.publisher &&
        this.publicationYear &&
        this.print
      ) {
        this.$store.dispatch("formInput/updateBook");
        this.$store.commit("notification/setAlertSuccess", true);
      } else {
        this.$store.commit("notification/setValidation", true);
      }
    },
  },
};
</script>

<style>
</style>
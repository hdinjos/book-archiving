<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="card w-50">
        <div class="card-body">
          <FormInput :allData="validation" />
        </div>
        <div class="card-footer">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button @click="backToHome" class="btn btn-secondary me-2">
              Back
            </button>
            <button @click="saveBook" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput";
export default {
  data: () => ({
    validation: true,
  }),
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
    backToHome() {
      this.$router.push("/");
    },
    saveBook() {
      if (
        this.title &&
        this.author &&
        this.publisher &&
        this.publicationYear &&
        this.print
      ) {
        const payload = {
          title: this.title,
          author: this.author,
          publisher: this.publisher,
          publicationYear: this.publicationYear,
          print: this.print,
        };
        this.$store.commit("addBook", payload);
        this.$store.commit("formInput/updateTitle", "");
        this.$store.commit("formInput/updateAuthor", "");
        this.$store.commit("formInput/updatePublisher", "");
        this.$store.commit("formInput/updatePublicationYear", "");
        this.$store.commit("formInput/updatePrint", "");
        this.$router.push("/");
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
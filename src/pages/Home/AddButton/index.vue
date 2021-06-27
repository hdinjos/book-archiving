<template>
  <div class="d-flex justify-content-end">
    <button @click="toAddBookPage" class="btn btn-primary end">
      Add Your Book
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toAddBookPage() {
      this.$store.commit("formInput/updateTitle", "");
      this.$store.commit("formInput/updateAuthor", "");
      this.$store.commit("formInput/updatePublisher", "");
      this.$store.commit("formInput/updatePublicationYear", "");
      this.$store.commit("formInput/updatePrint", "");
      this.$router.push("/add-book");
    },
  },
};
</script>

<style>
</style>
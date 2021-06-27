<template>
  <div class="card-body">
    <div class="row">
      <div class="col-12 mb-2">
        <div>Title</div>
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Hello My Prince"
        />
      </div>
      <div class="col-12 mb-2">
        <div>Author</div>
        <input
          v-model="author"
          type="text"
          class="form-control"
          placeholder="Ahimsa Azaleav"
        />
      </div>
      <div class="col-12 mb-2">
        <div>Publisher</div>
        <input
          v-model="publisher"
          type="text"
          class="form-control"
          placeholder="Kompas Gramedia"
        />
      </div>
      <div class="col-12 mb-2">
        <div>Publication Year</div>
        <input
          v-model="publicationYear"
          type="text"
          class="form-control"
          placeholder="2021"
        />
      </div>
      <div class="col-12 mb-2">
        <div>Print</div>
        <input
          v-model="print"
          type="text"
          class="form-control"
          placeholder="III"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title: {
      get() {
        return this.$store.getters["formInput/getTitle"];
      },
      set(payload) {
        this.$store.commit("formInput/updateTitle", payload);
      },
    },
    author: {
      get() {
        return this.$store.getters["formInput/getAuthor"];
      },
      set(payload) {
        this.$store.commit("formInput/updateAuthor", payload);
      },
    },
    publisher: {
      get() {
        return this.$store.getters["formInput/getPublisher"];
      },
      set(payload) {
        this.$store.commit("formInput/updatePublisher", payload);
      },
    },
    publicationYear: {
      get() {
        return this.$store.getters["formInput/getPublicationYear"];
      },
      set(payload) {
        this.$store.commit("formInput/updatePublicationYear", payload);
      },
    },
    print: {
      get() {
        return this.$store.getters["formInput/getPrint"];
      },
      set(payload) {
        this.$store.commit("formInput/updatePrint", payload);
      },
    },
  },
  // updated() {
  //   console.log(this.$store.getters["formInput/getPrint"]);
  // },
  // mounted() {
  //   console.log(this.$store.getters["formInput/getPrint"]);
  // },
};
</script>

<style>
</style>
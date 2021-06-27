<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th v-for="(col, i) in columns" :key="i" scope="col">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center" v-if="books.length === 0">
        <td colspan="7" class="p-5">Data kosong</td>
      </tr>
      <tr v-for="(book, i) in books" :key="i">
        <td scope="row">{{ i + 1 }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.publisher }}</td>
        <td>{{ book.publicationYear }}</td>
        <td>{{ book.print }}</td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn btn-link btn-sm me-2 shadow-none"
            @click="getDataEdit(book, i)"
          >
            Edit
          </button>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalDelete"
            class="btn btn-link btn-sm text-danger shadow-none"
            @click="getIndex(i)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    books: Array,
  },
  methods: {
    //take index from table
    getIndex(index) {
      this.$store.commit("setIndexDelete", index);
    },
    //get data that can edit and pass to module formInput state
    getDataEdit(dataBook, index) {
      this.$store.commit("formInput/updateTitle", dataBook.title);
      this.$store.commit("formInput/updateAuthor", dataBook.author);
      this.$store.commit("formInput/updatePublisher", dataBook.publisher);
      this.$store.commit(
        "formInput/updatePublicationYear",
        dataBook.publicationYear
      );
      this.$store.commit("formInput/updatePrint", dataBook.print);
      this.$store.commit("formInput/setIndexEdit", index);
    },
  },
};
</script>

<style>
</style>
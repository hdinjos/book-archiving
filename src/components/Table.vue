<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th v-for="(col, i) in columns" :key="i" scope="col">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(book, i) in books" :key="i">
        <td scope="row">{{ i + 1 }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.publisher }}</td>
        <td>{{ book.publicationYear }}</td>
        <td>{{ book.print }}</td>
        <td>
          <button class="btn btn-link btn-sm me-2">Edit</button>
          <button class="btn btn-link btn-sm text-danger">Delete</button>
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
  mounted() {
    console.log(this.books);
  },
};
</script>

<style>
</style>
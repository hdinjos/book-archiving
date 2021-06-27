<template>
  <div>
    <h1 class="text-center">Welcome to our Apps</h1>
    <Table :columns="columns" :books="books" />
  </div>
</template>

<script>
import Table from "@/components/Table";
import DB from "@/storages/db.JSON";

const columns = [
  "No",
  "Title",
  "Author",
  "Publisher",
  "Publication Year",
  "Print",
  "Action",
];

export default {
  data: () => ({
    books: DB.books,
    columns: columns,
  }),
  components: {
    Table,
  },
};
</script>

<style>
</style>
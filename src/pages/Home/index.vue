<template>
  <div>
    <h1 class="text-center">Welcome to our Apps</h1>
    <AddButton />
    <Table :columns="columns" :books="books" />
    <ModalEditBook />
    <ModalDeleteBook />
  </div>
</template>

<script>
import Table from "@/components/Table";
import AddButton from "@/pages/Home/AddButton";
import ModalEditBook from "@/pages/Home/ModalEditBook";
import ModalDeleteBook from "@/pages/Home/ModalDeleteBook";
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
    AddButton,
    ModalEditBook,
    ModalDeleteBook,
  },
};
</script>

<style>
</style>
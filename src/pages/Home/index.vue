<template>
  <div>
    <h1 class="text-center">Welcome to our Apps</h1>
    <AddButton />
    <Table :columns="columns" :books="getAllBooks" />
    <ModalEditBook />
    <ModalDeleteBook />
  </div>
</template>

<script>
import Table from "@/components/Table";
import AddButton from "@/pages/Home/AddButton";
import ModalEditBook from "@/pages/Home/ModalEditBook";
import ModalDeleteBook from "@/pages/Home/ModalDeleteBook";

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
    columns: columns,
  }),
  components: {
    Table,
    AddButton,
    ModalEditBook,
    ModalDeleteBook,
  },
  computed: {
    getAllBooks() {
      return this.$store.state.books;
    },
  },
};
</script>

<style>
</style>
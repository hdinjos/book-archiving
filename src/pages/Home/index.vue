<template>
  <div>
    <Jumbotron />
    <AddButton class="mb-2" />
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
import Jumbotron from "@/pages/Home/Jumbotron";

export default {
  data: () => ({
    //for title table header
    columns: [
      "No",
      "Title",
      "Author",
      "Publisher",
      "Publication Year",
      "Print",
      "Action",
    ],
  }),
  components: {
    Table,
    AddButton,
    ModalEditBook,
    ModalDeleteBook,
    Jumbotron,
  },
  computed: {
    //initial, getData from root state
    getAllBooks() {
      return this.$store.getters.getAllBooks;
    },
  },
};
</script>

<style>
</style>
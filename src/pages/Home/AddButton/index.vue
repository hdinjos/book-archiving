<template>
  <div class="d-flex justify-content-end">
    <button @click="toAddBookPage" class="btn btn-primary end">Add Book</button>
  </div>
</template>

<script>
export default {
  methods: {
    toAddBookPage() {
      this.$router.push("/add-book");
    },
  },
};
</script>

<style>
</style>
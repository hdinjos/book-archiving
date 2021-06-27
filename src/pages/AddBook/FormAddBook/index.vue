<template>
  <div class="d-flex justify-content-center">
    <div class="card w-50">
      <div class="card-body">
        <FormInput />
      </div>
      <div class="card-footer">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-secondary me-2">Back</button>
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput";
export default {
  components: {
    FormInput,
  },
};
</script>

<style>
</style>
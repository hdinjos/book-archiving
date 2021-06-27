<template>
  <div class="container my-2">
    <router-view />
    <Alert />
  </div>
</template>

<script>
import Alert from "@/components/Alert";
export default {
  components: {
    Alert,
  },
};
</script>


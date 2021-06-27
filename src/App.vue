<template>
  <div class="container">
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
  computed: {
    validation() {
      return this.$store.state.notification.validation;
    },
  },
};
</script>


<template>
  <router-link :to="`/sem${nextsite}`">
    <v-btn rounded right color="primary">Next</v-btn>
  </router-link>
</template>

<script>
export default {
  name: "CgpaCalciNextButton",
  props: {
    nextsite: String,
  },
};
</script>

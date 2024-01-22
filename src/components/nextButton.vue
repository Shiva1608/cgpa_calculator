<template>
  <router-link :to="`/sem${nextsite}`">
    <v-btn rounded right color="primary" @click="courseName">Next</v-btn>
  </router-link>
</template>

<script>
export default {
  name: "CgpaCalciNextButton",
  props: {
    nextsite: String,
    course: String,
  },
  methods: {
    courseName() {
      if (this.nextsite === "1") {
        this.$store.dispatch("updateCourse", this.course);
      }
    },
  },
};
</script>

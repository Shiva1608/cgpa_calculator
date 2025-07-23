<template>
  <div>
    <v-container
      style="display: flex; justify-content: center; align-items: center; gap: 16px; flex-direction: column;"
    >
      <v-card class="mx-auto mt-16" width="500">
        <v-card-title style="margin-left: 34%">Course Name</v-card-title>
        <v-select
          style="width: 50%; margin-left: 24%"
          label="Select Course Name"
          :items="['CS', 'IT']"
          v-model="course"
          @change="setCourse"
        />
        <v-card-subtitle style="color: crimson; margin-left: 22%">
          NOTE : Only for MSc Integrated 5yrs!
        </v-card-subtitle>
      </v-card>
      <NextButton nextsite="1" :course="course" />
    </v-container>
  </div>
</template>

<script>
import NextButton from "@/components/nextButton.vue";

export default {
  name: "HomePage",
  components: {
    NextButton,
  },
  data() {
    return {
      course: "",
    };
  },
  methods: {
    setCourse() {
      this.$store.dispatch("updateCourse", this.course);
    },
  },
};
</script>

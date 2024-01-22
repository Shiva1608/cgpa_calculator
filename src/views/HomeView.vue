<template>
  <div>
    <v-container>
      <v-card class="mx-auto mt-16" width="500">
        <v-card-title style="margin-left: 34%"> Course Name </v-card-title>
        <v-select
          style="width: 50%; margin-left: 24%"
          label="Select Course Name"
          :items="['CS', 'IT']"
          v-model="course"
        ></v-select>
        <v-card-subtitle style="color: crimson; margin-left: 22%"
          >NOTE : Only for MSc Integrated 5yrs!</v-card-subtitle
        >
      </v-card>
      <NextButton nextsite="1" :course="course" />
    </v-container>
  </div>
</template>

<script>
import NextButton from "@/components/nextButton.vue";
export default {
  components: {
    NextButton,
  },
  name: "HomePage",
  data() {
    return {
      course: "",
    };
  },
};
</script>

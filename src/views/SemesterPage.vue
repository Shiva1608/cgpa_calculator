<template>
  <div>
    <v-container>
      <h1 class="mt-5" style="text-align: center">
        Semester {{ $route.params.sem[$route.params.sem.length - 1] }}
      </h1>
      <br />
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">S.No</th>
              <th class="text-center">CourseName</th>
              <th class="text-center">CourseCode</th>
              <th class="text-center">Credits</th>
              <th class="text-center">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in current($route.params.sem)"
              :key="item.code"
            >
              <td class="text-center">{{ index + 1 }}</td>
              <td class="text-center">{{ item.name }}</td>
              <td class="text-center">{{ item.code }}</td>
              <td class="text-center">{{ item.credits }}</td>
              <td class="text-center" style="width: 7%">
                <v-select :items="grades" v-model="item.grade"></v-select>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <br />
      <h2 style="text-align: center">
        GPA :
        {{
          $store.state.GPA[
            parseInt($route.params.sem[$route.params.sem.length - 1])
          ]
        }}
      </h2>
      <v-btn
        rounded
        color="success"
        @click="$store.dispatch('addGPA', semData[$route.params.sem])"
        >Calculate GPA</v-btn
      >
      <v-btn rounded color="grey" @click="calculateCGPA">Calculate CGPA</v-btn>
      <NextButton
        :nextsite="
          (
            parseInt($route.params.sem[$route.params.sem.length - 1]) + 1
          ).toString()
        "
      />
    </v-container>
    <br />
  </div>
</template>

<script>
import NextButton from "@/components/nextButton.vue";
import sem1Data from "@/assets/sem1.json";
import sem2Data from "@/assets/sem2.json";
import sem3Data from "@/assets/sem3.json";
import sem4Data from "@/assets/sem4.json";
import sem5Data from "@/assets/sem5.json";
export default {
  name: "CgpaCalciSemesterPage",
  components: {
    NextButton,
  },
  data() {
    return {
      grades: ["O", "A+", "A", "B+", "B", "C", "U"],
      semData: {
        sem1: sem1Data,
        sem2: sem2Data,
        sem3: sem3Data,
        sem4: sem4Data,
        sem5: sem5Data,
      },
    };
  },

  mounted() {},

  methods: {
    current: function (data) {
      return this.semData[data];
    },
    calculateCGPA: function () {
      this.$store.dispatch("calCGPA", this.semData);
      window.alert(
        "Your CGPA for the considering only the semesters you have entered and calculated GPAs for is calculated!\n\nCGPA : " +
          this.$store.getters.CGPAGetter
      );
    },
  },
};
</script>

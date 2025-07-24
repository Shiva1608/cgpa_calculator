<template>
  <div>
    <v-container
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-direction: column;
      "
    >
      <h1 class="mt-5" style="text-align: center">
        Semester {{ $route.params.sem[$route.params.sem.length - 1] }}
      </h1>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">S.No</th>
              <th class="text-center">Course Name</th>
              <th class="text-center">Course Code</th>
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
                <v-select :items="grades" v-model="item.grade" />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <br />
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
        "
      >
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
          @click="$store.dispatch('addGPA', current($route.params.sem))"
        >
          Calculate GPA
        </v-btn>
        <v-btn rounded color="grey" @click="calculateCGPA">
          Calculate CGPA
        </v-btn>
        <NextButton
          :nextsite="
            (
              parseInt($route.params.sem[$route.params.sem.length - 1]) + 1
            ).toString()
          "
        />
      </div>
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
import sem6Data from "@/assets/sem6.json";
import sem7Data from "@/assets/sem7.json";
import sem8Data from "@/assets/sem8.json";
import sem9Data from "@/assets/sem9.json";
import sem10Data from "@/assets/sem10.json";

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
        sem6: sem6Data,
        sem7: sem7Data,
        sem8: sem8Data,
        sem9: sem9Data,
        sem10: sem10Data,
      },
    };
  },
  mounted() {
    const currentSem = parseInt(this.$route.params.sem.replace("sem", ""));
    if (currentSem === 1 && !this.$store.getters.courseGetter) {
      const selected = window.prompt("Enter your course (e.g., cs, it):");
      if (selected) {
        this.$store.dispatch("updateCourse", selected.toLowerCase());
      } else {
        this.$router.push("/");
      }
    } else if (!this.$store.getters.courseGetter) {
      alert("Please select a course first.");
      this.$router.push("/");
    }
  },
  methods: {
    current(semKey) {
      const selectedCourse = this.$store.getters.courseGetter.toLowerCase();
      return this.semData[semKey].filter((item) => {
        const course = item.course?.toLowerCase?.();
        return course === selectedCourse || course === "common";
      });
    },
    calculateCGPA() {
      const updatedData = {};
      for (const semKey in this.semData) {
        updatedData[semKey] = this.current(semKey); // grabs up-to-date grades
      }

      this.$store.dispatch("calCGPA", updatedData);
      alert("Your CGPA is: " + this.$store.getters.CGPAGetter.toFixed(2));
    },
  },
};
</script>

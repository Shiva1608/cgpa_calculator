import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CGPA: 0.0,
    course: "",
    GPA: {
      1: 0.0,
      2: 0.0,
      3: 0.0,
      4: 0.0,
      5: 0.0,
      6: 0.0,
      7: 0.0,
      8: 0.0,
    },
    credits: {
      1: 22,
      2: 23,
      3: 23,
      4: 24,
      5: 23,
      6: 21,
      7: 16,
      8: 23,
    },
  },
  getters: {
    CGPAGetter: (state) => state.CGPA,
    courseGetter: (state) => state.course,
  },
  mutations: {
    UPDATE_GPA(state, gpa) {
      state.GPA[parseInt(gpa.sem)] = gpa.gpa;
    },
    UPDATE_CGPA(state, data) {
      state.CGPA = data;
    },
    UPDATE_COURSE(state, data) {
      state.course = data;
    },
  },
  actions: {
    addGPA(context, payload) {
      let grade_point = {
        O: 10,
        "A+": 9,
        A: 8,
        "B+": 7,
        B: 6,
        C: 5,
        U: 0,
      };
      let gpa = 0.0;
      let credits = 0;
      for (let i of payload) {
        if (i.grade === "U") {
          continue;
        }
        credits += parseInt(i.credits);
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line no-unused-vars
        gpa += parseInt(i.credits) * parseFloat(grade_point[i.grade]);
      }
      context.commit("UPDATE_GPA", {
        gpa: gpa / credits,
        sem: payload[0].sem,
      });
    },
    calCGPA(context, payload) {
      let grade_point = {
        O: 10,
        "A+": 9,
        A: 8,
        "B+": 7,
        B: 6,
        C: 5,
        U: 0,
      };
      let total = 0.0;
      let creds = 0;
      let valid = true;
      for (let i in payload) {
        for (let j of payload[i]) {
          if (j.grade === "") {
            valid = false;
            break;
          }
          if (!valid) {
            break;
          }
          if (j.grade === "U") {
            continue;
          }
          creds += parseInt(j.credits);
          total += parseFloat(grade_point[j.grade]) * parseInt(j.credits);
        }
      }
      console.log(creds);
      console.log(total);
      context.commit("UPDATE_CGPA", total / creds);
    },
    updateCourse(context, payload) {
      context.commit("UPDATE_COURSE", payload);
    },
  },
});

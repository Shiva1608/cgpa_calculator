<template>
  <v-app>
    <v-main>
      <h1
        v-if="$route.path === '/'"
        style="text-align: center; margin-top: 2%; font-size: 350%"
      >
        CGPA CALCULATOR
      </h1>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

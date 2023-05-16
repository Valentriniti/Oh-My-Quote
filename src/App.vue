<template>
  <NavBar />
  <router-view />
  <FooterBar/>

  <!-- <router-view /> -->
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import NavBar from "@/components/NavBar.vue"
  import FooterBar from "@/components/FooterBar.vue"

  export default {
    name: 'App',
    components: {
      NavBar,
      FooterBar
    },
    computed: {
      ...mapActions(['loadQuotes'])
    },
    async mounted() {
      await this.loadQuotes;
    } 
  }
  </script>
  
  <style>

  </style>
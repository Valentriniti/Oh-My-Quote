<template>
  <div id="content-wrap">
    <NavBar />
    <router-view />
    <FooterBar/>
  </div>
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
  

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid" >
        <router-link to="/"><img src="../assets/1bubble-speech.png" alt="PR" width="30" class="d-inline-block align-text-top"></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars" style="color: #ffffff;"></i></button>

      <div class="collapse navbar-collapse justify-content-md-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/ExploreView" class="nav-link">Explore</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/MyQuotesView" class="nav-link">MyQuotes</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>

export default {
  name: 'NavBar',

}

</script>

<style>
nav {
  background-color: rgb(0, 0, 0);

}

.nav-link{
        color: rgb(255, 255, 255) !important;
        transition: all 0.5s ease;
    }
    
.nav-link:hover{
        color: #F2B119 !important;
        transform: scale(1.2);
    }
.list-item{
        cursor: pointer;
    }
    #userLogin{
      color: rgb(255, 255, 255);
    }


</style>
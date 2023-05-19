<template>
  <main id="main" >
      <div class="container">
        <div class="row px-5 pt-5 px-md-0 text-center align-items-center">
          <h1 class="title display-1 mt-5 pt-5">Oh My Quote</h1>
        </div>
        <div class="row px-5  px-md-0 text-center  mx-auto p-3 px-5">
          <p class="mainText display-6 mb-4"> need inspiration?</p> 
          <router-link to="/Explore" ><button id="startBtn" class="btn btn-warning mx-auto p-3 px-5 text-center">Start</button></router-link>
        </div>
      </div>
  </main>
</template>
    
<script>
  export default {
  name: "Home-View",
    
  }  
</script>
    
<style>
#main{
  background-image:url(../assets//home-background.jpg);
  background-size: cover;
  position: relative;
  min-height: 100%;
  height: 90vh;
  margin: 0;
  box-sizing: inherit;
}

.mainText{
  color: rgb(255, 255, 255);
}

.title{
  font-family: 'Comfortaa', sans-serif;
  color:rgb(255, 255, 255);
}

#startBtn{
  color: #fff;
  font-size: large;
}

#startBtn:hover{
  background-color: #2cb5a3;
  border-color: #2cb5a3;
}
  </style>
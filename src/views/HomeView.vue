<template>
  <main id="main" >
      <div class="container">
        <div class="row px-5 pt-5 px-md-0 text-center align-items-center">
          <h1 class="title display-1 mt-5 pt-5">Oh My Quote</h1>
        </div>
        <div class="row px-5  px-md-0 text-center align-items-center">
          <p class="mainText display-6 mb-4"> need inspiration?</p> 
          <router-link to="/ExploreView" ><button id="startBtn" class="btn btn-warning  mx-auto p-3 px-5">Start</button></router-link>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

#main{
/*   <a href="https://www.freepik.es/vector-gratis/fondo-estilo-memphis-formas-fluidas-abstractas_14649424.htm#query=design%20background&position=0&from_view=search&track=ais">Imagen de starline</a> en Freepik */
  background-image:url(../assets/SL_043021_42650_23.jpg);
  background-size: cover;
  position: relative;
  min-height: 100%;
  height: 70vh;
  margin: 0;
  box-sizing: inherit;
  
}

.mainText{
  color: rgb(255, 255, 255);
}

.title{
  font-family: 'Comfortaa';
/*   font-size: 50pt; */
  color:rgb(255, 255, 255);
}

#startBtn{
/*   background-color: #F2B119; */
  color: #fff;
}
  </style>
<template>
  <div class="container">
      <div class="row justify-content-center">
          <img id="notFound" class="img-fluid mx-auto d-block" src="../assets/404-error.jpg" alt="">
      </div>
      <div class="row  justify-content-center">
          <div class="col-5 text-center">
          <router-link to="/"><button id="comeBack" class="btn btn-warning mb-5 mx-auto p-3 px-5">Comeback</button></router-link>
          </div>
      </div>
  </div>
<!--     Imagen de <a href="https://www.freepik.es/vector-gratis/error-404-hecho-mano_1587605.htm#page=2&query=404%20not%20found&position=13&from_view=search&track=ais">Freepik</a> -->
</template>

<script>
  export default {
  name: "NotFoundView",
    
  }
</script>

<style>
#notFound{
  height:60vh;
  width: auto;
}

#comeBack{
  color: #fff;
  font-size: large;
}

#comeBack:hover{
  background-color: #2cb5a3;
  border-color: #2cb5a3;
}
</style>


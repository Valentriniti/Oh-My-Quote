<template>
  <main class="container">
      <div class="row justify-content-center">
          <img id="notFound" class="img-fluid mx-auto d-block" src="../assets/404-error.jpg" alt="">
      </div>
      <div class="row  justify-content-center">
          <div class="col-5 text-center">
          <router-link to="/"><button id="comeBack" class="btn btn-warning mb-5 mx-auto p-3 px-5">Comeback</button></router-link>
          </div>
      </div>
  </main>
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


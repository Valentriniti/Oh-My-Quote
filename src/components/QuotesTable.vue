<template>
  <div class="container">
    <div class="row">
      <h2 class="titulo">Oh My Quotes</h2>
    </div>
    <div class="row justify-content-center py-5">
<!--         <div class="col-auto">
          <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
        </div> -->
      </div>

        <div class=" table-responsive contenedorTabla">
          <table class="table table-bordered table-hover align-middle">
          <thead class="table-primary">
              <tr>
                  <th scope="col" class="text-center">Author</th>
                  <th scope="col" class="text-center">Quote</th>
                  <th scope="col" class="text-center">Send</th>
                  <th scope="col" class="text-center">Delete</th>
              </tr>
        </thead>

        <tbody>
            <tr v-for="quote in myQuotes" :key="quote.text">
                <td  class="text-center">{{ quote.author }}</td>
                <td  class="text-center">{{ quote.text }}</td>
                <td class="text-center">
                    <button class="btn btn-modificar"  id="modificar" type="button">&#9998;</button>
                </td>
                <td class="text-center"><button class="btn btn-modificar" id="borrar" type="button" @click="deleteTableQuote(quote.author)">&#128465;</button></td>
            </tr>
        </tbody>
        </table>
      </div>
  </div>
  </template>
    
    <script>
    import {mapState, mapMutations} from 'vuex';
    import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
    
    export default {
      name: 'AdminTable',
      computed: {
        ...mapState(['myQuotes'])
      },
      methods: {
        ...mapMutations(['deleteTableQuote']),

      },


       
        
      }


    </script>
    
    <style>
      
      #card-img-top{
        max-width: 8rem;
        height: 60px;
        }

      .container{
        font-family: 'Montserrat', sans-serif;
      }

      .titulo{
        padding-top: 5rem;
      }

      .table.table-bordered{
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 5em;
      }
      .contenedorTabla{
        max-width: 99vw;
      }

      .modal-content{
      font-family: 'Montserrat', sans-serif;
      }

      #search{
        border-radius: 50px;
      }

      .btn.btn-crear,.btn.btn-modificar{
              background-color: #8B82B7;
              color: azure;
              font-family: 'Montserrat', sans-serif;
              margin: 0;
          }
          .btn.btn-crear:hover,.btn.btn-modificar:hover{
              background-color: #f2b119;
              color: azure;
          }
          .btn.btn-cancelar,.btn.btn-agregar,.btn.btn-buscar{
              background-color: #8B82B7;
              color: azure;
              font-family: 'Montserrat', sans-serif;
          }

          .btn.btn-agregar{
              background-color: #f2b119;
              color: azure;
              font-family: 'Montserrat', sans-serif;
          }

          .btn.btn-cancelar:hover,.btn.btn-agregar:hover,.btn.btn-buscar:hover{
              background-color: #f2b119;
              color: azure;
          }

          .btn.btn-agregar:hover{
              background-color: #f3c65c;
              color: azure;
          }

          .btn.btn-eliminar{
              background-color: #f2b119;
              color: azure;
          }
          .btn.btn-eliminar:hover{
              background-color: #f2b119;
              color: azure;
          }
    </style>
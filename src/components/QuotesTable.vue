<template>
  <div class=" table-responsive contenedorTabla">
    <table class="table table-bordered table-hover align-middle">
      <thead class="table-dark">
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
            <td  class="text-center"><em>{{ quote.text }}</em></td>
            <td class="text-center">
                <button class="btn btn-modificar"  id="modificar" type="button"><i class="fa-solid fa-envelope" style="color: #ffffff;"></i></button>
            </td>
            <td class="text-center"><button class="btn btn-modificar" id="borrar" type="button" @click="deleteTableQuote(quote.text)"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
<script>
    import {mapState, mapMutations} from 'vuex';
    
    export default {
      name: 'AdminTable',

      computed: {
        ...mapState(['myQuotes'])
      },
      methods: {
        ...mapMutations(['deleteTableQuote']),
      }
      
      }
</script>
    
<style>
      .container{
        font-family: 'Montserrat', sans-serif;
      }

      .table.table-bordered{
        font-family: 'Comfortaa', sans-serif;
        margin-bottom: 5em;
      }
      .contenedorTabla{
        max-width: 99vw;
      }

      .btn.btn-crear,.btn.btn-modificar{
              background-color: #2cb5a3;
              font-family: 'Montserrat', sans-serif;
              margin: 0;
          }
      .btn.btn-modificar:hover{
              background-color: #F2B119;

          }

</style>
<template>
  <div class="container">
    <div class="row mt-5">
      <h2 class="display-6 mb-3">My Quotes</h2>
      <h5 v-if="user" class="mb-3" >Heeeeey {{ user }}, here are the quotes you saved<i class="fa-regular fa-face-smile mx-2" style="color: #000000;"></i>:</h5>
    </div>
    <QuotesTable/>
  </div>      
</template>
      
<script>
import QuotesTable from '@/components/QuotesTable.vue';
      
  export default {
    name: 'MyQuotesView',
    props: {
      user: String
    },
    components: {
          QuotesTable,
    }
      }
      </script>
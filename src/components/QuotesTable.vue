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
                <button class="btn btn-modificar"  id="modificar" type="button" data-bs-toggle="modal" data-bs-target="#sendTableModal" @click="saveEmailQuote({text:quote.text, author:quote.author})"><i class="fa-solid fa-envelope" style="color: #ffffff;"></i></button>
            </td>
            <td class="text-center"><button class="btn btn-modificar" id="borrar" type="button" @click="deleteTableQuote(quote.text)"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i></button></td>
        </tr>
      </tbody>
    </table>
  </div>


   <!-- Modal send-->
   <div class="modal fade" id="sendTableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Send it to a friend!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-2 mt-3 p-2 align-items-center" style="background-color: #afe8e0;">
            <p class="mx-2"><em>{{ this.emailQuote.text }}</em></p>
            <p class="mx-2"><strong><em>{{ emailQuote.author }}</em></strong></p>
          </div>
          <div class="mb-4 mt-3">
            <label for="formTitle" class="form-label">Your Name</label>
            <input type="text" class="form-control" id="formName" v-model="name" placeholder="" required>
          </div>
          <div class="mb-4 mt-3">
            <label for="formTitle" class="form-label">Your friend's Name</label>
            <input type="text" class="form-control" id="formFriendName" v-model="friendsName" placeholder="" required>
          </div>
          <div class="mb-4 mt-3">
            <label for="formTitle" class="form-label">Your friend's Email</label>
            <input type="email" class="form-control" id="formEmail" v-model="friendsEmail" placeholder="yourfriendsemail@mail.com" required>
          </div>
          <div class="mb-5">
            <label for="formDescription" class="form-label">leave them a message</label>
            <textarea class="form-control" id="formDescription" rows="3" v-model="message" placeholder=""></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel </button>
          <button type="button" class="btn btn-dark" @click="sendEmail()">Send<i class="fa-regular fa-envelope mx-1" style="color: #ffffff;"></i></button>
        </div>
      </div>
    </div>
  </div>
  
</template>
    
<script>
    import {mapState, mapMutations} from 'vuex';
    import emailjs from '@emailjs/browser';
    
    export default {
      name: 'AdminTable',
      data(){
      return {
        name:'',
        friendsName:'',
        friendsEmail:'',
        message:''
  
      };
    },


      computed: {
        ...mapState(['myQuotes','emailQuote'])
      },
      methods: {
        ...mapMutations(['deleteTableQuote', 'saveEmailQuote']),
  
      sendEmail() {
        let selectedQuote = `${this.myQuotes.text}\n ${this.myQuotes.author}`;
        emailjs.send("service_fer81tg","template_7r5ia5r",{
          to_name: this.friendsName,
          from_name:this.name,
          us_name:'Oh My Quote',
          quote:selectedQuote,
          message:this.message,
          email: this.friendsEmail
        }, "KyBSrgwqdFFV4ZXwm")
        .then(() => {
            alert('the quote has been sended to your friend');
          }, (err) => {
            alert(JSON.stringify(err));
          });
      },
  
    },
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
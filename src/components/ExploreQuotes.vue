<template>
<!-- <div v-if="!allQuotes" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> -->

<div>
  <button @click="mostrarQuotes">sdafd</button>
</div>

<div id="carouselExample" class="carousel slide carousel-dark">
  <div class="carousel-inner vh-100">
    <!-- active item carousel -->
    <div class="carousel-item active align-content-center justify-content-center">
      <section class="vh-100" style="background-color: #eee;">
      <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-5 justify-content-center text-center">
            <i class="fa-solid fa-book-bookmark fa-2xl " style="color: #000000;"></i>
            <p class="display-6 text-center mt-4 mb-0">Ready?</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </section>
    </div>
    <!--  next item carousel -->
    <div class="carousel-item" v-for="quote in allQuotes" :key="quote.text">
      <section class="vh-100" style="background-color: #eee;">
      <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center mb-5">
      <div class="col col-lg-9 col-xl-7">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-5">

            <div class="text-center mb-4 pb-2">
              <i class="fa-solid fa-wand-magic-sparkles" style="color: #000000;"></i>
            </div>

            <figure class="text-center mb-0">
              <blockquote class="blockquote">
                <p class="pb-3">
                  <i class="fas fa-quote-left fa-xs text-warning"></i>
                  <span class="lead font-italic">{{ quote.text }}</span>
                  <i class="fas fa-quote-right fa-xs text-warning"></i>
                </p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0">
                {{ quote.author }}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      </div>
      
      <div class="row d-flex justify-content-center align-items-center">
        <!-- Save btn -->
        <button class="btn btn-dark col-10 col-md-4 g-3 mx-3" @click="tableQuotes({text:quote.text, author:quote.author})">Save<i class="fa-solid fa-heart mx-2" style="color: #ffffff;"></i></button>
        
        <!-- Send btn trigger modal -->
        <button class="btn btn-dark col-10 col-md-4 g-3 mx-3" @click="saveEmailQuote({text:quote.text, author:quote.author})" data-bs-toggle="modal" data-bs-target="#sendModal">Send<i class="fa-solid fa-envelope-open mx-3" style="color: #ffffff;"></i> </button>
      </div>
      </div>
      </section>
    </div>
  </div>
<!--   carousel btns -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- Modal send-->
<div class="modal fade" id="sendModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Send it to a friend!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-2 mt-3 p-2 align-items-center" style="background-color: #fae8ae;">
          <p class="mx-2"><em>{{ emailQuote.text }}</em></p>
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
import { mapState,mapMutations } from 'vuex';
import emailjs from '@emailjs/browser';

export default {
  data(){
    return {
      name:'',
      friendsName:'',
      friendsEmail:'',
      message:''

    };
  },

  computed:{
    ...mapState(['allQuotes','emailQuote'])
  },
  methods: {
    ...mapMutations(['tableQuotes','saveEmailQuote']),
    mostrarQuotes(){
      console.log(this.allQuotes);
    },

    sendEmail() {
      let selectedQuote = `${this.emailQuote.text}\n ${this.emailQuote.author}`;
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
    }

  }


         
}
</script>

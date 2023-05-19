<template>
<!--spinner loading for fetch -->
<div class="d-flex justify-content-center" v-if="!allQuotes" >
    <div class="spinner-border text-warning m-5" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
</div>

<div v-else>
  <div id="carouselQuotes" class="carousel slide carousel-dark">
    <div class="carousel-inner vh-100 pb-5 mb-5">
<!-- active item carousel -->
      <div class="carousel-item active h-100">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col col-lg-9 col-xl-7">
              <div class="card">
                <div class="card-body p-5 justify-content-center text-center">
                <i class="fa-solid fa-book-bookmark fa-2xl " style="color: #000000;"></i>
                <p class="display-6 text-center mt-4 mb-0">Ready?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--  next item carousel -->
      <div class="carousel-item h-100 pt-3" v-for="quote in allQuotes" :key="quote.text">
        <section>
        <div class="container h-100">
          <div class="row h-100 mt-5 pt-5 justify-content-center align-items-center mb-2">
            <div class="col col-lg-9 col-xl-7">
              <div class="card">
                <div class="card-body p-4">
                  <div class="text-center mb-2 pb-1">
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
            <!-- Save Quote btn -->
            <button class="btn btn-dark col-10 col-md-3 g-3 mx-3" @click="tableQuotes({text:quote.text, author:quote.author})">Save<i class="fa-solid fa-heart mx-2" style="color: #ffffff;"></i></button>
            
            <!-- Send btn trigger modal -->
            <button class="btn btn-dark col-10 col-md-3 g-3 mx-3" @click="saveEmailQuote({text:quote.text, author:quote.author})" data-bs-toggle="modal" data-bs-target="#sendModal">Send<i class="fa-solid fa-envelope-open mx-3" style="color: #ffffff;"></i> </button>
          </div>
        </div>
        </section>
      </div>
    </div>
  <!--  carousel btns -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselQuotes" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselQuotes" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<!-- Modal Send Quote-->
  <div class="modal fade" id="sendModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Send it to a friend!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-2 mt-3 p-2 align-items-center" >
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
  
      sendEmail() {
        let selectedQuote = `"${this.emailQuote.text}"\n ${this.emailQuote.author}`;
        emailjs.send("service_fer81tg","template_7r5ia5r",{
          to_name: this.friendsName,
          from_name:this.name,
          us_name:'Oh My Quote',
          quote:selectedQuote,
          message:this.message,
          email: this.friendsEmail
        }, "KyBSrgwqdFFV4ZXwm")
        .then(() => {
            alert('The quote has been sended to your friend');
          }, (err) => {
            alert(JSON.stringify(err));
          });
      }
  
    },
/*   prevent bootstrap carousel fail when changing view */
    mounted() {
        let slide = document.querySelector('.carousel-item');
        slide.classList.add('active')
      }
           
  }
</script>

<style>
#carouselQuotes{
  background-color: #eee;
}

.card{
  border-radius: 15px;
}
</style>
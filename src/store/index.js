import { createStore } from 'vuex'



export default createStore({
  state: {

    allQuotes: null,
    myQuotes: [],
    emailQuote: {text:'', author:''}
  },

  mutations: {
    fillQuotes(state, payload) {
      state.allQuotes = payload;
    },
    tableQuotes(state,payload) { 
      state.myQuotes.push(payload);
      console.log (state.myQuotes);
      alert("Quote Saved")
    },
    deleteTableQuote(state,payload){
      state.myQuotes = state.myQuotes.filter((element)=>{
        return element.author != payload.author;
    });
    console.log(state.myQuotes)
    },
    saveEmailQuote(state,payload){
      state.emailQuote = payload;
    }


  },

  actions: {
    async loadQuotes({commit}){
      try {
        let promise = await fetch("https://type.fit/api/quotes")
        let quotes = await promise.json();
        commit('fillQuotes',quotes)
        console.table(quotes)
  
      } catch (error) {
        console.log(error)
      }
    }
  },

  modules: {
  }

})


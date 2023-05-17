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
      let verificar = false;
      state.myQuotes.forEach((e) => {
        if (e.text == payload.text) {
          verificar = true;
          alert('Quote already saved');
        return false;
        }
        else {
          verificar = false;
        }
      });
      if (!verificar) {
      state.myQuotes.push(payload);
      alert("Quote Saved")
    }
    },
    deleteTableQuote(state,payload){
      let newMyQuotes = state.myQuotes.filter((element)=>(
        element.text !== payload
      ));
      state.myQuotes = newMyQuotes;
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
/*         console.table(quotes) */
  
      } catch (error) {
        console.log(error)
      }
    }
  },

  modules: {
  }

})


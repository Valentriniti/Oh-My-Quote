import { createStore } from 'vuex'


export default createStore({
  state: {
    allQuotes: null,
    myQuotes: [],
    emailQuote: {text:'', author:''}
  },

  mutations: {
    /* Quotes from API fetch */
    fillQuotes(state, payload) {
      state.allQuotes = payload;
    },

    /* Save Quotes to display in MyQuotes and avoid saving repeated ones  */
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

    /* Delete quote from MyQuotes Table */
    deleteTableQuote(state,payload){
      let newMyQuotes = state.myQuotes.filter((element)=>(
        element.text !== payload
      ));
      state.myQuotes = newMyQuotes;
    },

    /* Save te quote user wants to send */
    saveEmailQuote(state,payload){
      state.emailQuote = payload;
    }
  },

  actions: {
    /* fetch of quotes */
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
})


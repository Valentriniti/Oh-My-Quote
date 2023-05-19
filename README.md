# Oh My Quote

## Instalación del proyecto
```
npm install
```

### Compilar código para visualización del proyecto
```
npm run serve
```

## Características:

* Maquetación con HTML y CSS
* Uso de Componenetes Vue
* Programación con Javascript ES6
* Consumo, manejo de datos y estados
* Estructura de archivos y carpetas


### 1.Maquetación con HTML y CSS: Uso de Bootstrap y etiquetas semánticas

> Ejemplo de HTML Semántico y Framework Bootstrap en [src/views/HomeView.vue](src/views/HomeView.vue) (línea 1)
```html
<template>
  <main id="main" >
      <div class="container">
        <div class="row px-5 pt-5 px-md-0 text-center align-items-center">
          <h1 class="title display-1 mt-5 pt-5">Oh My Quote</h1>
        </div>
        <div class="row px-5  px-md-0 text-center  mx-auto p-3 px-5">
          <p class="mainText display-6 mb-4"> need inspiration?</p> 
          <router-link to="/Explore" ><button id="startBtn" class="btn btn-warning mx-auto p-3 px-5 text-center">Start</button></router-link>
        </div>
      </div>
  </main>
</template>
```
> Ejemplo de Responsividad con Bootstrap en [src/components/NavBar.vue](src/components/NavBar.vue) (línea 1)
```html

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid" >
        <router-link to="/"><img src="../assets/1bubble-speech.png" alt="PR" width="30" class="d-inline-block align-text-top"></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars" style="color: #ffffff;"></i></button>

      <div class="collapse navbar-collapse justify-content-md-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/Explore" class="nav-link">Explore</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/MyQuotes" class="nav-link">MyQuotes</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
```

### 2. Uso de Componenetes Vue

> Uso de componentes en src/components y visualizado en [src/App.vue](src/App.vue) (línea 1)
```html
<template>
  <div id="content-wrap">
    <NavBar />
    <router-view />
    <FooterBar/>
  </div>
</template>
```
> Comunicación entre componentes en [src/components/QuotesTable.vue](src/components/QuotesTable.vue) (línea 66, 81, 15, 36)
```js
import {mapState, mapMutations} from 'vuex';
...
computed: {
    ...mapState(['myQuotes','emailQuote'])
},
```html
<td  class="text-center">{{ quote.author }}</td>
<td  class="text-center"><em>{{ quote.text }}</em></td>
...
<p class="mx-2"><em>{{ this.emailQuote.text }}</em></p>
<p class="mx-2"><strong><em>{{ emailQuote.author }}</em></strong></p>
```

> Uso de ciclos de vida de un componente para evitar ruptura de carousel durante flujo entre vistas en [src/components/ExploreQuotes.vue](src/components/ExploreQuotes.vue) (línea 157)
```js
mounted() {
    let slide = document.querySelector('.carousel-item');
    slide.classList.add('active')
    }
```

> Uso de parámetros props (:user) y rutas por defecto en [src/router/index.js](src/router/index.js) (línea 13)
```js
{
    path: '/MyQuotes',
    redirect: '/MyQuotes/you',
    children:[{
      path: '/MyQuotes/:user',
      name: 'MyQuotes',
      component: MyQuotesView,
      props: true
    }]
  },

> Ejemplo de URL de MyQuotes, 'you' puede ser cambiado manualmente como parámetro en el navegador
para que el mensaje en MyQuotesView cambie sengún lo ingresado en [src/views/MyQuotesView.vue ](src/views/MyQuotesView.vue) (línea 5)
```
http://localhost:8080/MyQuotes/you
http://localhost:8080/MyQuotes/Valentina <-- Modifica contenido etiqueta <h5> de 'Heeeeey you...' a 'Heeeeey Valentina...'
```
```html
<h5 v-if="user" class="mb-3" >Heeeeey {{ user }}, here are the quotes you saved<i class="fa-regular fa-face-smile mx-2" style="color: #000000;"></i>:</h5>


### 3. Programación con JavaScript

> Utilización de métodos iterativos y condicionales JS para guardar citas que serán mostradas en MyQuotesView en [src/store/index.js](src/store/index.js) (línea 18)
```js
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
```

### 4. Consumo, manejo de datos y estados 

> Uso de actions del store 'vuex' para consumo de API's en [src/App.vue](src/App.vue) (línea 50)
```js
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
```

> Uso de actions del store 'vuex' en [src/App.vue](src/App.vue) (línea 10 y 20)
```js
  import { mapActions } from "vuex";
```
computed: {
    ...mapActions(['loadQuotes'])
},
async mounted() {
    await this.loadQuotes;
} 
```

> Manejo de estados en 'vuex' [src/store/index.js](src/store/index.js) (línea 5)
```js
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


  ### 5. Estructura de archivos y carpetas
  
    .
    ├── ...
    ├── public                  # HTML base y favicon
    ├── src                     # Archivos Principales
    │   ├── assets              # Documentos multimedia y CSS base(Bootstrap y tipografías)
    │   ├── components          # Componentes Vue reutilizables
    │   ├── router              # Módulo de Router
    │   ├── store               # Módulo de Store 'vuex'
    │   ├── views               # Vistas Principales
    │   ├── App.vue             # Archivo base de carga de vistas, componentes y módulos
    │   └── main.js             # Archivo base de carga de scripts
    └── ...
```

## Imágenes Freepik utilizadas:

* https://www.freepik.es/vector-gratis/fondo-estilo-memphis-formas-fluidas-abstractas_14649424.htm#query=design%20background&position=0&from_view=search&track=ais

* https://www.freepik.es/vector-gratis/error-404-hecho-mano_1587605.htm#page=2&query=404%20not%20found&position=13&from_view=search&track=ais

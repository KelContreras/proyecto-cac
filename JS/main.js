

//detector de eventos al botón (Menu) que alterna la clase “show“
// del elemento con la clase “#main-nav ul” cuando se hace clic.

document.querySelector("button.menu-toggle")
    .addEventListener("click", function() {
           document.querySelector("#main-nav ul").
                      classList.toggle("show")})



const { createApp } = Vue;

createApp({
  data() {
    return {
      artistInfo: null
    };
  },
  mounted() {
    this.getArtistInfo('Nombre del artista');
  },
  methods: {
    getArtistInfo(artistName) {
      const API_KEY = '702a6656c7e67685f795383b6a137bf4';
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.artistInfo = data.artist;
          console.log(this.artistInfo);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}).mount('#app');


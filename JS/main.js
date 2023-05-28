
// Selecciona el botón del menú hamburguesa y el menú de navegación
var menuToggle = document.querySelector('.menu-toggle');
var mainNav = document.querySelector('#main-nav ul');

// Agrega el evento click al botón del menú hamburguesa
menuToggle.addEventListener('click', function() {
  // Alternar la clase 'show' en el menú de navegación
  mainNav.classList.toggle('show');
});


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


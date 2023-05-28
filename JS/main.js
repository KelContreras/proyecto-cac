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
  methods: {
    reservarEvento() {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: 'AIzaSyBshg-TyEGxJbWceygJYzomqEvOBMdPMS4',
          clientId: '755119694196-21hrunf2dmro918qmu7ksns1lj7aotnu.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar.readonly'
        }).then(() => {
          if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
            gapi.auth2.getAuthInstance().signIn().then(() => {
              this.crearEvento();
            }).catch((error) => {
              console.error('Error de autenticación', error);
            });
          } else {
            this.crearEvento();
          }
        }).catch((error) => {
          console.error('Error al inicializar la API', error);
        });
      });
    },
    crearEvento() {
      const evento = {
        'summary': 'Nuevo evento',
        'start': {
          'dateTime': '2023-05-19T10:00:00',
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2023-05-19T12:00:00',
          'timeZone': 'America/Los_Angeles'
        }
      };

      gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': evento
      }).then((response) => {
        console.log('Evento creado', response.result);
        alert('Evento creado correctamente');
      }).catch((error) => {
        console.error('Error al crear el evento', error);
        alert('Error al crear el evento');
      });
    }
  }
}).mount("#app");





//detector de eventos al botón (Menu) que alterna la clase “show“
// del elemento con la clase “#main-nav ul” cuando se hace clic.

document.querySelector("button.menu-toggle")
    .addEventListener("click", function() {
           document.querySelector("#main-nav ul").
                      classList.toggle("show")})



const miIni = document.getElementById("ini");

miIni.addEventListener("click", () => {
  alert("Ya estas aqui");
});



window.addEventListener("scroll", function(){
    var elemento = document.querySelector(".texto");
    var altura = elemento.getBoundingClientRect().top;
    var alturaVentana = window.innerHeight;
    
    if (altura < alturaVentana) {
      elemento.classList.add("mostrar");
    }
});
  
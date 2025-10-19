const main = document.getElementsByClassName("main")[0];

// Creamos el elemento contenedor
var outputDiv = document.createElement("div");

// Creamos el texto que va a llevar el contenedor
var outputText = document.createElement("p");

// Agregamos el texto al div
outputDiv.appendChild(outputText);

outputDiv.className = "formout";
outputDiv.style.display = "none";

// Agregamos nuestro elemento al documento
main.appendChild(outputDiv);


const pelicula = document.getElementById("pelicula");
const funcion = document.getElementById("funcion");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");

const regNombre = /^[a-zA-Zñ]{3,}(?: [a-zA-Z]+)*$/;
const regMail = /^[a-zA-Z0-9](?:[\.-\w])*@\w+(?:-\w+)?(?:\.\w+(?:-\w+)?)+$/;

function validate(event) {
	event.preventDefault();
	let valido = true;

	// Reseteamos colores
	pelicula.style.borderBottomColor = "";
	funcion.style.borderBottomColor = "";
	nombre.style.borderBottomColor = "";
	correo.style.borderBottomColor = "";
	document.querySelector("#pelicula+.error").style.display = "none";
	document.querySelector("#funcion+.error").style.display = "none";
	document.querySelector("#nombre+.error").style.display = "none";
	document.querySelector("#correo+.error").style.display = "none";
	
	if (!pelicula.selectedIndex) {
		valido = false;
		pelicula.style.borderBottomColor = "red";
		document.querySelector("#pelicula+.error").style.display = "block";
	}

	if (!funcion.selectedIndex) {
		valido = false;
		funcion.style.borderBottomColor = "red";
		document.querySelector("#funcion+.error").style.display = "block";
	}

	if (!(regNombre.test(nombre.value))) {
		valido = false;
		nombre.style.borderBottomColor = "red";
		document.querySelector("#nombre+.error").style.display = "block";
	}

	if (!(regMail.test(correo.value))) {
		valido = false;
		correo.style.borderBottomColor = "red";
		document.querySelector("#correo+.error").style.display = "block";
	}

	if (valido) {
		outputText.innerText = `
		Película: ${pelicula.options[pelicula.selectedIndex].innerText}
		Función: ${funcion.options[funcion.selectedIndex].innerText}
		Nombre: ${nombre.value}
		Correo: ${correo.value}
		`;
		outputDiv.style.display = "block";
		document.forms['entrada'].reset();
	}
} 
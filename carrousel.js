// Mostramos el primer slide.
let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
	showSlide(slideIndex+1);
}

function prevSlide() {
	showSlide(slideIndex-1);
}

// Mostrar el slide basado en el indice dado
function showSlide(index) {
	// Armamos un array con las tarjetas
	const tarjetas = Array.from(document.getElementsByClassName("tarjeta-trailer"));
	
	// Si estamos al principio y pedimos la anterior, regresa al final
	let i = index < 0 ? tarjetas.length - 1 : index;

	// Desde el final volvemos al principio
	slideIndex = Math.abs(i % tarjetas.length);

	// Ocultamos todas las tarjetas
	tarjetas.map(x => {x.style.display='none'});

	//Mostramos la tarjeta correspondiente
	tarjetas[slideIndex].style.display = 'flex';
}
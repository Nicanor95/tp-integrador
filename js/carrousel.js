// Arreglo con los trailers.
const trailers = [
	{
		src: "https://www.youtube.com/embed/JfVOs4VSpmA?si=7XVlnfIZj0FK1ecc",
		titulo: "Spider-Man: No Way Home",
		desc: "Con la identidad de Spider-Man revelada, Peter le pide ayuda al Doctor Strange. Cuando un hechizo sale mal, comienzan a aparecer enemigos de otros mundos, lo que obliga a Peter a descubrir lo que realmente significa ser Spider-Man."
	},
	{
		src: "https://www.youtube.com/embed/7gytUpiues8?si=Op6p_R3lK-LImIwJ",
		titulo: "Zootopia 2",
		desc: "Próxima película de Walt Disney Animation Studios, en coproducción con Walt Disney Pictures."
	},
	{
		src: "https://www.youtube.com/embed/yUykc63elIU?si=Q7Q1esAoZuadTRDd",
		titulo: "Avatar: Fuego y Cenizas",
		desc: "Tras una pérdida devastadora, la familia de Jake y Neytiri se enfrenta a una tribu Na'vi hostil, los Ash, liderados por el implacable Varang, mientras los conflictos en Pandora se intensifican y surgen nuevos dilemas morales."
	},
	{
		src: "https://www.youtube-nocookie.com/embed/Y5UQI61vzlw?si=s5Nc8_uOEN4e87m5",
		titulo: "Depredador: Tierras Salvajes",
		desc: "Un joven Depredador marginado de su clan encuentra un aliado poco probable en su viaje en busca del adversario definitivo."
	}
]

// Seleccionamos elementos de la tarjeta.
let tarjeta = {
	video: document.getElementById("trailer-video"),
	titulo: document.getElementById("trailer-titulo"),
	desc: document.getElementById("trailer-descripcion")
};

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
	// Si estamos al principio y pedimos la anterior, regresa al final
	let i = index < 0 ? trailers.length - 1 : index;

	// Desde el final volvemos al principio
	slideIndex = Math.abs(i % trailers.length);

	// Cambiamos la tarjeta, es mas lento ya que tiene que cargar el src cada vez que cambia
	// Pero es lo que se pide.
	tarjeta.video.src = trailers[slideIndex].src;
	tarjeta.titulo.innerText = trailers[slideIndex].titulo;
	tarjeta.desc.innerText = trailers[slideIndex].desc;
}
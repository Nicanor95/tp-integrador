function openForm(index) {
	let url = new URL("../", window.location);
	url.pathname = url.pathname + "form/sacaentrada.html"
	url.searchParams.append("pelicula", `${index}`);
	window.location = url;
}
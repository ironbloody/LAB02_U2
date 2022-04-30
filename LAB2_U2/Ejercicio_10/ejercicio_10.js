function dado() {
	// Numero aleatorio del 1 al 6
	var random = Math.floor(Math.random()*6)+1;
	var imagen = document.getElementById("lanzamiento");
	// Condiciones para que cambie la imagen dependiendo del random que salga
	if (random == 1) document.getElementById("lanzamiento").src = "Fotos/1.png";
	else if (random == 2) document.getElementById("lanzamiento").src = "Fotos/2.png";
	else if (random == 3) document.getElementById("lanzamiento").src = "Fotos/3.png";
	else if (random == 4) document.getElementById("lanzamiento").src = "Fotos/4.png";
	else if (random == 5) document.getElementById("lanzamiento").src = "Fotos/5.png";
	else document.getElementById("lanzamiento").src = "Fotos/6.png";
	
}	



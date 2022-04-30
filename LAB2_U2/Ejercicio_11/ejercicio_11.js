// array que almacenara las imagenes
var imagen = new Array(5)

// creacion de las variables de las imagenes
imagen[0] = "1";
imagen[1] = "2";
imagen[2] = "3";
imagen[3] = "4";
imagen[4] = "5";

imagenSrc = "Fotos/"
imagentermina = ".jpg";

// contador
var i = 0;

// funcion para el boton previous
function previous(){
	if(i<1){
		var l = i
	} 
	else {
		var l = i-=1;
	}
	// se carga la imagen a la que corresponda el contador
	document.getElementById("lanzamiento").src = imagenSrc + imagen[i] + imagentermina;;
}

// funcion para el boton next
function next(){
	if(i>3){
		var l = i
	} 
	else {
		var l = i+=1;
	}
	// se carga la imagen a la que corresponda el contador
	document.getElementById("lanzamiento").src = imagenSrc + imagen[i] + imagentermina;;
}



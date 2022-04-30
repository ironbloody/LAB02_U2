// Funcion para encontras las letras a
function encontrar(){
	// Se ingresa la frase
	let Frase = prompt(" Frase: ");
	let cont = 0;
	// Recorre la frase y cuenta las a
	for (let i=0; i < Frase.length; i++){
		if (Frase[i].toLowerCase() == "a"){
		cont = cont + 1;
		}
	}
	// Se imprimen la cantidad de letras a
	alert("El total de letras a es: " + cont);
	}
encontrar();

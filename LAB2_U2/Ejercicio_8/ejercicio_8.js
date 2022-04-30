function ContarVocalesSeparadas() {
	//Ingreso de Frase
	let Frase = prompt("Ingrese: ");
	//Contadores para cada vocal
	let cont1 = 0;
	let cont2 = 0;
	let cont3 = 0;
	let cont4 = 0;
	let cont5 = 0;
	// For que recorrera la Frase
	for (let i = 0; i < Frase.length; i++){
		// Si se encuentra la vocal el contador aumenta
		if (Frase[i].toLowerCase() == "a"){
		cont1++;
		}
		if (Frase[i].toLowerCase() == "e"){
		cont2++;
		}
		if (Frase[i].toLowerCase() == "i"){
		cont3++;
		}
		if (Frase[i].toLowerCase() == "o"){
		cont4++;
		}
		if (Frase[i].toLowerCase() == "u"){
		cont5++;
		}
	}
	// Impresion alertas
	alert("A: " + cont1);
	alert("E: " + cont2);
	alert("I: " + cont3);
	alert("O: " + cont4);
	alert("U: " + cont5);
}
ContarVocalesSeparadas();
		



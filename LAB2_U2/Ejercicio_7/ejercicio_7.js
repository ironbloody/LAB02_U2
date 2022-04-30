//Funcion que cuenta las vocales
function Contadorvocales() { 
	
	// Ingreso de la frase
	let Frase = prompt('Frase:');
	
	//Contador de las vocales
	const ContarVocales = Frase.match(/[aeiou]/gi).length;
 
	//Impresion del numero de vocales
	alert("El numero de vocales de la frase es: " + ContarVocales);
}

Contadorvocales();




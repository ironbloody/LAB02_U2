function divisible() {
	// Variables que almacenan los numeros
	const Numero1 = parseInt(prompt('Numero 1:'));
	
	//Calculo para saber si es divisible en 2
	if (Numero1 % 2 == 0){
		alert("El numero " + Numero1 + " es divisible por 2");
	}
	else {
		alert("El numero " + Numero1 + " no es divisible por 2");
	}
	// Se imprime el numero maximo
	
}

divisible();

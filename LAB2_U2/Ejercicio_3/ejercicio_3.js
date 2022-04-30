function suma() {
	// Variables que almacenan los numeros
	const Numero1 = parseInt(prompt('Numero 1:'));
	const Numero2 = parseInt(prompt('Numero 2: '));
	//Funcion que calcula el numero maximo entre numeros
	var maximo = Math.max(Numero1, Numero2);
	// Se imprime el numero maximo
	alert("El numero mayor es: " + maximo);
}

suma();

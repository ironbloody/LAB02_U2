function USD(){
	var Dolares =  document.getElementById("USDCLP").value;
	let cambioDolares = Dolares * 850;
	document.getElementById('cambioD').value=cambioDolares;
}

function CLP(){
	var pesos =  document.getElementById("CLPUSD").value;
	let cambioPesos = pesos / 850;
	document.getElementById('cambioP').value=cambioPesos;
}

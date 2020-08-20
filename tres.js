/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let nombre;
	let lugar;
	let temporada;
	let cantidad;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let lugarPreferido;
	let nombreMasCantidad;
	let mayorCantidad;
	let flag = 0;
	let promedio = 0;
	let contadorInvierno = 0;
	let acumuladorCAntidadInvierno = 0;
	let seguir;

	do {
		nombre = prompt("Ingrese nombre");
		while (!isNaN(nombre)) {
			nombre = prompt("Error. Ingrese nombre");
		}

		lugar = prompt("Ingrese lugar (bariloche - cataratas - salta)");
		while (lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta') {
			lugar = prompt("Error. Ingrese lugar (bariloche - cataratas - salta)");
		}

		temporada = prompt("Ingrese temporada (verano - otoño - invierno - primavera)");
		while (temporada != 'verano' && temporada != 'otoño' && temporada != 'invierno' && temporada != 'primavera') {
			temporada = prompt("Error. Ingrese temporada (verano - otoño - invierno - primavera)");
		}


		cantidad = parseInt(prompt("Ingrese cantidad: "));
		while (isNaN(cantidad || cantidad <= 0)) {
			cantidad = parseInt(prompt("Error. Ingrese cantidad: "));
		}

		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;

			case "cataratas":
				contadorCataratas++;
				break;

			case "salta":
				contadorSalta++;
				break;
		}

		if (flag == 0 || cantidad > mayorCantidad) {
			mayorCantidad = cantidad;
			nombreMasCantidad = nombre;
			flag = 1;
		}

		if (temporada == "invierno") {
			acumuladorCAntidadInvierno = acumuladorCAntidadInvierno + cantidad;
			contadorInvierno++;
		}


		seguir = prompt("Quiere ingresar otro viaje? ");
	} while (seguir == 's');


	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		lugarPreferido = "bariloche";
	} else if (contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta) {
		lugarPreferido = "cataratas";
	} else {
		lugarPreferido = "salta";
	}

	// calculo el promedio
	if (contadorInvierno != 0) {
		promedio = acumuladorCAntidadInvierno / contadorInvierno;
	}

	console.log("a)el lugar más elegido es " + lugarPreferido);
	console.log("b)el nombre de titular que lleva más pasajeros es " + nombreMasCantidad + " con una cantidad de " + mayorCantidad + " pasajeros");
	console.log("c)el promedio de personas por viaje,  que viajan en invierno es " + promedio);

}

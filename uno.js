/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorHombres = 0;
	let contadorMujeres = 0;
	let mujerMasTemperatura;
	let promedioTotal;
	let acumuladorEdad = 0;
	let flag = 0;
	let nombreMujerTemperatura;

	for (let i; i < 5; i++) {

		nombre = prompt("Ingrese nombre: ");
		while (!isNaN(nombre)) {
			nombre = prompt("Error. Ingrese nombre: ");
		}

		temperatura = parseFloat(prompt("Ingrese temperatura: "));
		while (isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Error. Ingrese temperatura: "));
		}

		sexo = prompt("Ingrese sexo: (f-m)");
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("Error. Ingrese sexo: (f-m)");
		}

		edad = parseInt(prompt("Ingrese edad: "));
		while (isNaN(edad)) {
			edad = parseInt(prompt("Error. Ingrese edad: "));
		}


		if (sexo == 'f') {
			contadorMujeres++;
			if (flag == 0 || temperatura > mujerMasTemperatura) {
				mujerMasTemperatura = temperatura;
				nombreMujerTemperatura = nombre;
				flag == 1;
			}

		} else {
			contadorHombres++;
		}


		acumuladorEdad = acumuladorEdad + edad;



	}




	promedioTotal = acumuladorEdad / 5

	console.log("Hay " + contadorHombres + " hombres y " + contadorMujeres + " mujeres");
	console.log("El promedio de edad total es de: " + promedioTotal + " años");
	if (flag == 0) {
		console.log("No se ingresaron mujeres");
	} else {
		console.log("La mujer con mas temperatura es " + nombreMujerTemperatura + " y su temperatura es de " + mujerMasTemperatura + " grados");
	}

}

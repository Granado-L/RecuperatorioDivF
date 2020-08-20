/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar() {

  let marca;
  let tipo;
  let precio;
  let peso;
  let acumuladorPeso = 0;
  let marcaLiquidoCaro;
  let precioLiquidoCaro;
  let flagLiquido = 0;
  let marcaSolidoLiviano;
  let precioSolidoLiviano;
  let flagSolido = 0;
  let seguir;

  do {

    marca = prompt("Ingrese marca: ");
    while (!isNaN(marca)) {
      marca = prompt("Error. Ingrese marca: ");
    }

    precio = parseFloat(prompt("Ingrese el precio: "));
    while (precio <= 0 || isNaN(precio)) {
      precio = parseFloat(prompt("Error. Ingrese el precio: "));
    }

    peso = parseFloat(prompt("Ingrese el peso: "));
    while (peso <= 0 || isNaN(peso)) {
      peso = parseFloat(prompt("Error. Ingrese el peso: "));
    }

    tipo = prompt("Ingrese tipo (solido-liquido)");
    while (tipo != 'solido' && tipo != 'liquido') {
      tipo = prompt("Error. Ingrese tipo (solido-liquido)");
    }

    acumuladorPeso = acumuladorPeso + peso;

    if (tipo == "solido") {
      if (flagSolido == 0 || precio < precioSolidoLiviano) {
        precioSolidoLiviano = precio;
        marcaSolidoLiviano = marca;
        flagSolido = 1;
      }

    } else {
      if (flagLiquido == 0 || precio > precioLiquidoCaro) {
        precioLiquidoCaro = precio;
        marcaLiquidoCaro = marca;
        flagLiquido = 1;
      }
    }

    seguir = prompt("Quiere ingresar otro producto precione 's");
  } while (seguir == 's');


  console.log("a) Peso total de la compra: " + acumuladorPeso);
  console.log(" b) Marcaliquido caro: " + marcaLiquidoCaro + " y su precio es " + precioLiquidoCaro);
  console.log("c) Marca solido barato " + marcaSolidoLiviano + " y su precio es " + precioSolidoLiviano);

}

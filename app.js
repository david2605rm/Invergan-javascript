//logica

let nombreCliente = (prompt("Bienvenido A INVERGAN, Cual es su nombre?"));

while (nombreCliente === '') {
    alert("Por favor, Ingrese los datos requeridos"); 
    nombreCliente = (prompt("Bienvenido A INVERGAN, Cual es su nombre?"));
}
console.log(nombreCliente);

// presentar productos

let productoInversion = parseInt(prompt(nombreCliente+ " elige tu raza de inversion para conocer el valor de tu inversion y tu porcentaje de retorno \n1 Velazquez ... \n2 Brahman rojo ... \n3 Guzera ... \n4-no estoy interersado o ya tome mi eleccion"));


while (productoInversion != 4) {
    switch(productoInversion){
        case 1:
            const raza1 = inventarioRazas.find((raza) => raza.raza === "Velazquez");
            if (raza1) {
                console.log(raza1);
            } else {
                alert("Raza no encontrada en el inventario.");
            }
            break;
        case 2: 
            const raza2 = inventarioRazas.find((raza) => raza.raza === "Brahman Rojo");
            if (raza2) {
                console.log(raza2);
            } else {
                alert("Raza no encontrada en el inventario.");
            }
            break;   
        case 3: 
            const raza3 = inventarioRazas.find((raza) => raza.raza === "Guzera");
            if (raza3) {
                console.log(raza3);
            } else {
                alert("Raza no encontrada en el inventario.");
            }
            break;
        default:
            alert('seleccione opcion correcta')
            break;
    }
    productoInversion = parseInt(prompt(nombreCliente+ " elige tu raza de inversion para conocer el valor de tu inversion y tu porcentaje de retorno \n1 Velazquez ... \n2 Brahman rojo ... \n3 Guzera ... \n4-no estoy interersado o ya tome mi eleccion"));
};


function inversionDispuesta(precioMax){
    // busca de acuerdo a tu presupuesto posible inversion
    const capacidadInversion = inventarioRazas.filter((cabeza) => cabeza.caracteristicas.precio <= precioMax);
    
    let anuncioResultado = '';
    capacidadInversion.forEach((productoInv)=>{
        anuncioResultado += `tu raza seleccionada es: ${productoInv.raza} la cual tiene un precio de inversion de ${productoInv.caracteristicas.precio}`;
    })
    alert(anuncioResultado);
}

let inversionFiltrar = parseFloat(prompt("ingrese el monto maximo que esta dispuesto a invertir - tope min = 1425 usd"));

inversionDispuesta(inversionFiltrar);

alert("gracias por visitar invergan");


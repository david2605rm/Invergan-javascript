console.log(inventario)

//logica


let nombreCliente = (prompt("Bienvenido A INVERGAN, Cual es su nombre?"))

while (nombreCliente === '') {
    alert("Por favor, Ingrese los datos requeridos"); 
    nombreCliente = (prompt("Bienvenido A INVERGAN, Cual es su nombre?"))
}
console.log(nombreCliente)

// presentar productos

let productoInversion = parseInt(prompt(nombreCliente+ ' elige tu raza de inversion para conocer el valor de tu inversion y tu porcentaje de retorno \n1-velasquez ... \n2-brahman rojo ... \n3-guzera ... \n4-no estoy interersado'))


const seleccionRaza = inventario.filter((raza) =>  productoInversion == raza.includes('velazquez') );
console.log(seleccionRaza)


while (productoInversion != 4) {
    switch(productoInversion){
        case 1:
            alert('la raza velazques tiene un valor de 862 USD por cabeza con un retorno del 7% anual');
            break;
        case 2: 
            alert('la raza Brahman rojo tiene un valor de 935 USD por cabeza con un retorno del 8% anual');
            break;   
        case 3: 
            alert('la raza Guzera tiene un valor de 1476 USD por cabeza con un retorno del 14% anual');
            break;
        default:
            alert('seleccione opcion correcta')
            break;
    }
    productoInversion = parseInt(prompt(nombreCliente+ ' elige tu raza de inversion para conocer el valor de tu inversion y tu porcentaje de retorno \n1-velasquez ... \n2-brahman rojo ... \n3-guzera ...  \n4-no estoy interersado'))
};

// let inversionAcumulada = 0;
let nombreCliente = (prompt("Bienvenido A INVERGAN, Cual es su nombre?"))

if ((nombreCliente === '')){
    alert("Por favor, Ingrese los datos requeridos"); 
    nombreCliente = (prompt("Bienvenido A INVERGAN, Cual es su nombre?"))
}

let inversionAcumulada = 0;

function totalInvertido(invensionRaza) {
    inversionAcumulada = inversionAcumulada + invensionRaza;
    console.log('Se ha invertido ' + totalInvertido + ' Usd');
}

let productoInversion = parseInt(prompt(nombreCliente+ ' elige tu raza de inversion para conocer el valor de tu inversion y tu porcentaje de retorno \n1-velasquez ... \n2-brahman rojo ... \n3-guzera ... \n4-brahman blanco ... \n5-no estoy interersado'))


while (productoInversion != 5) {
    switch(productoInversion){
        case 1:
            alert('la raza velazques tiene un valor de 862 USD por cabeza con un retorno del 7% anual');
            totalInvertido(862)
            break;
        case 2: 
            alert('la raza Brahman rojo tiene un valor de 935 USD por cabeza con un retorno del 8% anual');
            totalInvertido(935)
            break;   
        case 3: 
            alert('la raza Guzera tiene un valor de 1476 USD por cabeza con un retorno del 14% anual');
            totalInvertido(1476)   
            break;
        case 4:
            alert('la raza Brahman blanco tiene un valor de 984 USD por cabeza con un retorno del 10% anual')
            totalInvertido(984)
            break;
        default:
            alert('seleccione opcion correcta')
            break;
    }
    productoInversion = parseInt(prompt(nombreCliente+ ' elige tu raza de inversion para conocer el valor de tu inversion y tu porcentaje de retorno \n1-velasquez ... \n2-brahman rojo ... \n3-guzera ... \n4-brahman blanco ... \n5-no estoy interersado'))
}

alert('Tu inversion total es de ' + inversionAcumulada + ' Usd')

/*let numeroInversion = parseInt(prompt('cuantas cabezas quieres invertir?'));*/
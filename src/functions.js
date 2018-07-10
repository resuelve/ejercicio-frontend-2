//Funcion que regresa el salario redondeado, del empleado usando expresiones regulares
export function redondeoPrecio(centavos) {
    return `$${parseFloat(centavos).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`; 
    // Usando toFixed para obtener 2 décimales
    // Insertando coma en las cifras (En lugar de 1000, sería 1,000) una vez que los modificadores encuentran que el number ya se ha repetido 3 veces.
    }


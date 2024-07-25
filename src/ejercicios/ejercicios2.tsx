import React from 'react';

// Función flecha para sumar los elementos de un arreglo
const calcularSuma = (arreglo: number[]): number => 
    arreglo.reduce((suma: number, elemento: number) => suma + elemento, 0);

const SumadorArreglo = () => {
    const datosArreglo: number[] = [1, 2, 3, 4, 5];

    const suma: number = calcularSuma(datosArreglo);

    return (
        <div>
            <h2>Sumador de Elementos del Arreglo</h2>
            <p>Arreglo: [{datosArreglo.join(', ')}]</p>
            <p>La suma de los elementos es: {suma}</p>
        </div>
    );
};

export default SumadorArreglo;
import React from 'react';

function CalculadoraAreaCuadrado() {
    const lado = 5; 
    const area = lado * lado;

    return (
        <div>
            <h2>Calculadora de Área de Cuadrado</h2>
            <p>El lado del cuadrado es: {lado}</p>
            <p>El área del cuadrado es: {area}</p>
        </div>
    );
}

export default CalculadoraAreaCuadrado;
import React from 'react';
import CalculadoraAreaCuadrado from './ejercicios/ejercicio1';
import SumadorArreglo from './ejercicios/ejercicios2';
import ArregloDivididos from './ejercicios/ejercicio3'; 
import Ejercicio4 from './ejercicios/ejecricio4';
import Acumulador from './ejercicios/ejercicio5';

const App = () => {
  return (
    <div className='mt-2'>
      <h1><strong>Deber 1°</strong></h1>
      <hr />
      <CalculadoraAreaCuadrado />
      <hr />
      <SumadorArreglo />
      <hr />
      <ArregloDivididos />
      <hr />
      <Ejercicio4 />
      <hr />
      <Acumulador />
    </div>
  );
};

export default App;

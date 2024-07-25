import React from 'react';

const ArregloDivididos = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const nuevoArreglo = arreglo.map(elemento => elemento / 5);

  return (
    <div>
      <h1>Nuevo Arreglo</h1>
      <div>
        {nuevoArreglo.join(', ')}
      </div>
    </div>
  );
};

export default ArregloDivididos;
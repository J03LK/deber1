import React, { useState } from 'react';

const Acumulador = () => {
const [acumulador, setAcumulador] = useState(5);

const incrementar = () => setAcumulador(acumulador + 5);
const disminuir = () => setAcumulador(acumulador - 5);

return (
    <div>
    <h1>Acumulador</h1>
    <p>Valor del acumulador: {acumulador}</p>
    <button onClick={incrementar} className='btn btn-primary'>Incrementar</button>
    &nbsp;
    <button onClick={disminuir} className='btn btn-danger'>Disminuir</button>
    </div>
);
};

export default Acumulador;

import React from 'react';

type Alumno = {
  name: string;
  edad: number;
  calificacion: number;
};

const Ejercicio4 = () => {
  const alumnos: Alumno[] = [
    {
      name: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      name: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      name: 'Gerson',
      edad: 18,
      calificacion: 9,
    }
  ];

  
  const calcularPromedioCalificaciones = (arregloAlumnos: Alumno[]): number => {
    
    const { sumaCalificaciones, conteo } = arregloAlumnos.reduce(
      (acumulador, alumno) => ({
        sumaCalificaciones: acumulador.sumaCalificaciones + alumno.calificacion, 
        conteo: acumulador.conteo + 1, 
      }),
      { sumaCalificaciones: 0, conteo: 0 } 
    );

    return conteo === 0 ? 0 : sumaCalificaciones / conteo; 
  };

  const promedio = calcularPromedioCalificaciones(alumnos);

  return (
    <div>
      <h2>Objetos Alumnos</h2>
      <ul>
        {alumnos.map((alumno, index) => (
          <li>
            {alumno.name} - Edad: {alumno.edad}, Calificación: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <p>El promedio de calificaciones es: {promedio.toFixed(2)}</p>
    </div>
  );
};

export default Ejercicio4;

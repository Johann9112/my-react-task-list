import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, alEditar, alCompletar, alBorrar }) {
  return (
    <ol>
      {tareas.map((tarea, indice) => (
        <Tarea
          key={indice}
          tarea={tarea}
          alEditar={() => alEditar(indice)}
          alCompletar={() => alCompletar(indice)}
          alBorrar={() => alBorrar(indice)}
        />
      ))}
    </ol>
  );
}

export default ListaTareas;

import React from 'react';

function Tarea({ tarea, alEditar, alCompletar, alBorrar }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => alCompletar()}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.texto}
      </span>
      <button onClick={alEditar} style={{ marginLeft: '10px' }}>Editar</button>
      <button onClick={alBorrar} style={{ marginLeft: '5px' }}>Borrar</button>
    </li>
  );
}

export default Tarea;

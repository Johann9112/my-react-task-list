import React from 'react';

const ListaTareas = ({ tareas, alEditar, alCompletar, alBorrar }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '1rem' }}></th>
          <th style={{ textAlign: 'left', padding: '1rem' }}>Responsable</th>
          <th style={{ textAlign: 'left', padding: '1rem' }}>Tarea</th>
          <th style={{ textAlign: 'left', padding: '1rem' }}>Prioridad</th>
          <th style={{ textAlign: 'left', paddingRight: '4rem', padding: '1rem' }}>Fecha</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea, indice) => (
          <tr key={indice} style={{ borderBottom: '.5px solid #ddd' }}>
            <td>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => alCompletar(indice)}
              />
            </td>
            <td style={{ paddingRight: '4rem', paddingLeft: '1rem' }}>{tarea.nombre}</td>
            <td style={{ paddingRight: '5rem', textDecoration: `${tarea.completada ? 'line-through' : 'none'}`, textDecorationColor: 'red' }}>
              {tarea.tarea}
            </td>
            <td style={{ textDecoration: `${tarea.completada ? 'line-through' : 'none'}`, textDecorationColor: 'red' }}>{tarea.prioridad}</td>
            <td>{tarea.fechaCreacion}</td>
            <td>
              <button onClick={() => alEditar(indice)}>Editar</button>
              <button onClick={() => alBorrar(indice)}>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaTareas;

import React, { useState } from 'react';

const FormularioAgregarTarea = ({ alAgregarTarea }) => {
  const [nombre, setNombre] = useState('');
  const [tarea, setTarea] = useState('');
  const [prioridad, setPrioridad] = useState('Media');

  const manejarCambioNombre = (event) => {
    setNombre(event.target.value);
  };

  const manejarCambioTarea = (event) => {
    setTarea(event.target.value);
  };

  const manejarCambioPrioridad = (event) => {
    setPrioridad(event.target.value);
  };

  const manejarEnviarFormulario = (event) => {
    event.preventDefault();
    if (nombre.trim() !== '' && tarea.trim() !== '') {
      const fechaCreacion = new Date().toLocaleDateString();
      alAgregarTarea({ nombre, tarea, prioridad, completada: false, fechaCreacion });
      setNombre('');
      setTarea('');
      setPrioridad('Media');
    }
  };

  return (
    <form onSubmit={manejarEnviarFormulario} className="formulario-tarea">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <label style={{ width: '100px', marginRight: '10px' }}>Responsable:</label>
        <input
          type="text"
          value={nombre}
          onChange={manejarCambioNombre}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <label style={{ width: '100px', marginRight: '10px' }}>Tarea:</label>
        <input
          type="text"
          value={tarea}
          onChange={manejarCambioTarea}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <label style={{ width: '100px', marginRight: '10px' }}>Prioridad:</label>
        <select value={prioridad} onChange={manejarCambioPrioridad}>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioAgregarTarea;

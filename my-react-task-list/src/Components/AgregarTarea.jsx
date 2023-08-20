import React, { useState } from 'react';

function AgregarTarea({ alAgregar }) {
  const [textoTarea, setTextoTarea] = useState('');

  const manejarAgregar = () => {
    alAgregar(textoTarea);
    setTextoTarea('');
  };

  return (
    <div>
      <input
        type="text"
        value={textoTarea}
        onChange={(e) => setTextoTarea(e.target.value)}
      />
      <button onClick={manejarAgregar}>Añadir</button>
    </div>
  );
}

export default AgregarTarea;

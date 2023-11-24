import React, { useState, useEffect } from 'react';
import './App.css';
import FormularioAgregarTarea from './Components/FormularioAgregarTarea';
import ListaTareas from './Components/ListaTareas';
import Confirmacion from './Components/Confirmacion';

function App() {
  const [tareas, setTareas] = useState([]);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [accionTemp, setAccionTemp] = useState(null);
  const [indiceTemp, setIndiceTemp] = useState(null);

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const manejarAgregarTarea = ({ nombre, tarea, prioridad, completada, fechaCreacion }) => {
    setTareas([...tareas, { nombre, tarea, prioridad, completada, fechaCreacion }]);
  };

  const manejarEditarTarea = (indice) => {
    setIndiceTemp(indice);
    setAccionTemp('editar');
    setMostrarConfirmacion(true);
  };

  const manejarCompletarTarea = (indice) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[indice].completada = !tareasActualizadas[indice].completada;
    setTareas(tareasActualizadas);
  };

  const manejarSolicitudBorrarTarea = (indice) => {
    setIndiceTemp(indice);
    setAccionTemp('borrar');
    setMostrarConfirmacion(true);
  };

  const confirmarAccion = () => {
    if (accionTemp === 'borrar') {
      const tareasActualizadas = tareas.filter((_, idx) => idx !== indiceTemp);
      setTareas(tareasActualizadas);
    } else if (accionTemp === 'editar') {
      const nuevoTexto = prompt("Ingresa el texto actualizado:");
      const tareasActualizadas = [...tareas];
      tareasActualizadas[indiceTemp].tarea = nuevoTexto;
      setTareas(tareasActualizadas);
    }
    setMostrarConfirmacion(false);
    setAccionTemp(null);
    setIndiceTemp(null);
  };

  return (
    <div className="app-container">
      <FormularioAgregarTarea alAgregarTarea={manejarAgregarTarea} />
      <h1>Lista de Tareas</h1>
      <ListaTareas
        tareas={tareas}
        alEditar={manejarEditarTarea}
        alCompletar={manejarCompletarTarea}
        alBorrar={manejarSolicitudBorrarTarea}
      />
      {mostrarConfirmacion && (
        <Confirmacion
          mensaje={`¿Estás seguro de que quieres ${accionTemp === 'borrar' ? 'borrar' : 'editar'} esta tarea?`}
          onConfirmar={confirmarAccion}
          onCancelar={() => setMostrarConfirmacion(false)}
        />
      )}
    </div>
  );
}

export default App;

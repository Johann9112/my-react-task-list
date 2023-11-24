import React, { useState } from 'react';
import { Input, Button, Select, FormControl, FormLabel, VStack } from '@chakra-ui/react';

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
      <VStack spacing="4">
        <FormControl>
          <FormLabel>Responsable:</FormLabel>
          <Input type="text" value={nombre} onChange={manejarCambioNombre} />
        </FormControl>
        <FormControl>
          <FormLabel>Tarea:</FormLabel>
          <Input type="text" value={tarea} onChange={manejarCambioTarea} />
        </FormControl>
        <FormControl>
          <FormLabel>Prioridad:</FormLabel>
          <Select value={prioridad} onChange={manejarCambioPrioridad}>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </Select>
        </FormControl>
        <Button type="submit">Agregar</Button>
      </VStack>
    </form>
  );
};

export default FormularioAgregarTarea;

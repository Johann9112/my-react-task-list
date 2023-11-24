// src/Components/ListaTareas.jsx
import React from 'react';
import { Checkbox, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const ListaTareas = ({ tareas, alEditar, alCompletar, alBorrar }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Responsable</Th>
          <Th>Tarea</Th>
          <Th>Prioridad</Th>
          <Th>Fecha</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {tareas.map((tarea, indice) => (
          <Tr key={indice}>
            <Td>
              <Checkbox
                isChecked={tarea.completada}
                onChange={() => alCompletar(indice)}
              />
            </Td>
            <Td>{tarea.nombre}</Td>
            <Td
              textDecoration={tarea.completada ? 'line-through' : 'none'}
              color={tarea.completada ? 'gray.500' : 'inherit'}
            >
              {tarea.tarea}
            </Td>
            <Td
              textDecoration={tarea.completada ? 'line-through' : 'none'}
              color={tarea.completada ? 'gray.500' : 'inherit'}
            >
              {tarea.prioridad}
            </Td>
            <Td>{tarea.fechaCreacion}</Td>
            <Td>
              <Button
                variant="ghost"
                colorScheme="teal"
                size="sm"
                onClick={() => alEditar(indice)}
              >
                <EditIcon />
              </Button>
              <Button
                variant="ghost"
                colorScheme="red"
                size="sm"
                onClick={() => alBorrar(indice)}
              >
                <DeleteIcon />
              </Button>
            </Td>
          </Tr>
        )
      )
    }
      </Tbody>
    </Table>
  );
};

export default ListaTareas;

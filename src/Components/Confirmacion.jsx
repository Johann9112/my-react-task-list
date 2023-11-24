import React from 'react';

function Confirmacion({ mensaje, onConfirmar, onCancelar }) {
  return (
    <div style={styles.fondo}>
      <div style={styles.cuadro}>
        <p>{mensaje}</p>
        <button onClick={onConfirmar}>Confirmar</button>
        <button onClick={onCancelar}>Cancelar</button>
      </div>
    </div>
  );
}

const styles = {
  fondo: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadro: {
    backgroundColor: 'white',
    color: '#003366',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.2)',
  }
}

export default Confirmacion;

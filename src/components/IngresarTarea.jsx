import React, { useState } from "react";
import '../style/IngresarTarea.css'
import { v4 as uuidv4 } from 'uuid';


function IngresarTarea({ addTask }) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    setInput('');
    addTask(tareaNueva);
  };

  return (
    <form className='ingresar-tarea' onSubmit={handleSend}>
      <input
        className='input-tarea'
        name='text'
        type='text'
        placeholder='Ingrese una tarea'
        onChange={handleChange}
      />
      <button className='boton-tarea'>Agregar Tarea</button>
    </form>
  );
}

export default IngresarTarea;
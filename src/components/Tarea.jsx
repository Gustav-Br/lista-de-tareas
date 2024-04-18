import React from 'react';
import '../style/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
      <div className='texto-tarea' onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='contenedor-icono-tarea' onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='icono-tarea' />
      </div>
    </div>
  );
}

export default Tarea;
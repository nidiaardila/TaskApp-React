import React from 'react';
import '../styles/Task.css';
import { AiOutlineClose } from "react-icons/ai"; //importar el icono de React icon

function Task({id, texto, realizada, taskDone, deleteTask}) {
    return(
        <div className={realizada ? 'task-container realizada' : 'task-container'}>
            <div className='task-text'
                 onClick={()=> taskDone(id)}>
                {texto}
            </div>
            <div className='task-container-icons'
                 onClick={()=> deleteTask(id)}>
                {/* Coloco el nombre del icono importado de react icon como un componente */}
               <AiOutlineClose className='task-icon'/> 
            </div>
        </div>
    );
}

export default Task;
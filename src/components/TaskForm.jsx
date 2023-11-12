import React, {useState} from 'react';
import '../styles/TaskForm.css';
// para generar id automaticamente libreria npm install uuid
import { v4 as uuidv4} from 'uuid';

function TaskForm(props){
    
    const [input, setInput] = useState('');

    const cambio = e => {
        // console.log('Escribiendo....');
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const envioForm = evento => {
        // para evitar volver a cargar toda la app cuando se envia el formulario
        evento.preventDefault();
        console.log('Enviando formulario');
        const newTask = {
            id : uuidv4(),
            texto: input,
            realizada: false
        }
        props.onSubmit(newTask);
    }

    return(
        <form className='task-form'
              onSubmit={envioForm}>
            <input
                className='task-input'
                type='text'
                placeholder='Write a task...' 
                name='texto'
                onChange={cambio}
            />
            <button className='task-button'>
              Add Task
            </button>
        </form>
    );
}

export default TaskForm;
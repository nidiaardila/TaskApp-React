import React, {useState}  from "react";
import '../styles/TaskList.css';
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList(){

const [tasks, setTasks] = useState([]);

const addTask = task => {
  // comprobar que el imput no este vacio
  if(task.texto.trim()){
    task.texto = task.texto.trim();
    const tasksActualizadas = [task, ...tasks];
    setTasks(tasksActualizadas);
  }
  console.log(task);
}

const deleteTask = id => {
  const tasksActualizadas = tasks.filter(task => task.id !== id);
  setTasks(tasksActualizadas);
}

    return(
        <>
          <TaskForm onSubmit={addTask} />
          <div className='task-list-container'>
           {
            tasks.map((task)=>
            <Task 
              key={task.id}
              id={task.id}
              texto= {task.texto}
              realizada={task.realizada}
              deleteTask={deleteTask}/>
            )
           }
          </div>
        </>
    );
}

export default TaskList;
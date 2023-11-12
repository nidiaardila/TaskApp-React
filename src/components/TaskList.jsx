import React, {useState}  from "react";
import '../styles/TaskList.css';
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList(){

const [tasks, setTasks] = useState([]);

const addTask = task => {
  console.log("Tarea agregada");
  console.log(task);
}

    return(
        <>
          <TaskForm onSubmit={addTask} />
          <div className='task-list-container'>
           {
            tasks.map((task)=>
            <Task 
              texto= {task.texto}
              realizada={task.realizada}/>
            )
           }
          </div>
        </>
    );
}

export default TaskList;
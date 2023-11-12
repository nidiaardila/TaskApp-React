
import './App.css';
import go from './images/go.png';
import TaskList from './components/TaskList';
// import Task from './components/Task';


function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={go} 
          className='logo' />
      </div>
      <div className='tareas-lista'>
          <h1>My Tasks</h1>
          {/* <Task texto='Aprender React'/> */}
          {/* <TaskForm /> */}
          <TaskList />
      </div>
    </div>
  );
}

export default App;

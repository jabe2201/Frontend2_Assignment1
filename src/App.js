import './index.css';
import Add from './Add';
import TasksList from './TasksList';
import { useEffect, useRef, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import Search from './Search';

function App() {
  const [tasks, setTasks] = useLocalStorage("todos", [
  {
    id: 1,
    todo: "Putsa fönster",
    date: "2023-01-20",
    category: "Hushållsarbete"
  },
  {
    id: 2,
    todo: "Rensa förrådet",
    date: "2023-01-16",
    category: "Hushållsarbete"
  },
  {
    id: 3,
    todo: "Skicka in kvitton",
    date: "2023-01-10",
    category: "Jobb"
  }
  ]);
  const [search, setSearch] = useState("");
  const [radio, setRadio] = useState("All");
  const inputRef = useRef(null);
  
useEffect(() => {
  inputRef.current.checked = true;
}, [])

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const deleteTasks = () => {
    setTasks([]);
  }

  const searchOption = (text) => {
    setSearch(text);
  }

  const radioOption = (radio) => {
    setRadio(radio);
  }

  return (
    <div>
      <Add addTask={addTask}/>
      <Search 
        searchOption={ searchOption }
        radioOption={ radioOption }
        ref = { inputRef }/>
      <TasksList 
        tasks={tasks}
        deleteTask={ deleteTask }
        searchOption={ search }
        radioOption={ radio }
        deleteTasks = { deleteTasks }/>
    </div>
    
  );
}

export default App;

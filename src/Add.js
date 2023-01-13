import { useState } from 'react';

const Add = ({ addTask }) => {
    const today = new Date().toLocaleString().slice(0,10); 
    const [todo, setTodo] = useState("");
    const [date, setDate] = useState(today);
    const [category, setCategory] = useState("Jobb");

    const submit = () => {
        const id = Math.floor(Math.random()* 1000 +1);
        addTask( {
            id: id,
            todo: todo,
            date: date,
            category: category
        })
        document.querySelector("#ToDoEntry").value = "";
        document.querySelector("#Date").value = today;
    }

    return ( 
        <div className="Add">
            <label>Todos</label>
            <input type="text" id="ToDoEntry" onChange={(e) => setTodo(e.target.value)}/>
            <div className="AddDate">
                <input type="date" id="Date" defaultValue={today} onChange={(e) => setDate(e.target.value)}/>
                <select name="Categories" id="Categories" onChange={(e) => setCategory(e.target.value)}>
                    <option value="Jobb">Jobb</option>
                    <option value="Hushållsarbete">Hushållsarbete</option>
                </select>
            </div>
            <button onClick={submit}>Lägg till</button>
        </div>
     );
}
 
export default Add;
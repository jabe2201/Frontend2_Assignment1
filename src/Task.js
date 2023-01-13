const Task = ({ task, deleteTask }) => {
    const today = new Date().toLocaleString().slice(0,10); 

    if ( task.date < today ) {
        return ( 
            <div className="List-Item">
                <p className="Todo">{ task.todo }</p>
                <p className="Red Date">{ task.date }</p>
                <p className="Category">{ task.category }</p>
                <button className="Button" onClick={() => deleteTask(task.id)}>Ta Bort</button>
            </div>
        );
    }

    return ( 
        <div className="List-Item">
            <p className="Todo">{ task.todo }</p>
            <p className="Date">{ task.date }</p>
            <p className="Category">{ task.category }</p>
            <button className="Button" onClick={() => deleteTask(task.id)}>Ta Bort</button>
        </div>
    );
}
 
export default Task;
import Task from "./Task";

const TasksList = ({ tasks, deleteTask, searchOption, radioOption, deleteTasks }) => {

    switch (radioOption) {
        case "All" : 
            if (searchOption === "") {
                return (
                    <div>
                        <div className="List">
                            {tasks
                            .map(task => (
                                <Task
                                    task = { task }
                                    key = { task.id }
                                    deleteTask = { deleteTask } />
                            ))}
                        </div>
                        <button
                            className="RemoveAll-Button"
                            onClick={ deleteTasks }>Ta bort alla
                        </button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="List">
                            {tasks
                            .filter(task => (task.todo.toLowerCase().includes(searchOption.toLowerCase())))
                            .map(task => (
                                <Task
                                    task = { task }
                                    key = { task.id }
                                    deleteTask = { deleteTask } />
                            ))}
                        </div>
                        <button
                            className="RemoveAll-Button"
                            onClick={ deleteTasks }>Ta bort alla
                        </button>
                    </div>
                )
            }
        
        case "Hushållsarbete" : 
            if (searchOption === "") {
                return (
                    <div>
                        <div className="List">
                            {tasks
                            .filter(task => (task.category === radioOption))
                            .map(task => (
                                <Task
                                    task = { task }
                                    key = { task.id }
                                    deleteTask = { deleteTask } />
                            ))}
                        </div>
                        <button
                            className="RemoveAll-Button"
                            onClick={ deleteTasks }>Ta bort alla
                        </button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="List">
                            {tasks
                            .filter(task => (task.category === radioOption))
                            .filter(task => (task.todo.toLowerCase().includes(searchOption.toLowerCase())))
                            .map(task => (
                                <Task
                                    task = { task }
                                    key = { task.id }
                                    deleteTask = { deleteTask } />
                            ))}
                        </div>
                        <button
                            className="RemoveAll-Button"
                            onClick={ deleteTasks }>Ta bort alla
                        </button>
                    </div>
                )
            }

        case "Jobb" : 
        if (searchOption === "") {
            return (
                <div>
                    <div className="List">
                        {tasks
                        .filter(task => (task.category === radioOption))
                        .map(task => (
                            <Task
                                task = { task }
                                key = { task.id }
                                deleteTask = { deleteTask } />
                        ))}
                    </div>
                    <button
                        className="RemoveAll-Button"
                        onClick={ deleteTasks }>Ta bort alla
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                     <div className="List">
                        {tasks
                        .filter(task => (task.category === radioOption))
                        .filter(task => (task.todo.toLowerCase().includes(searchOption.toLowerCase())))
                        .map(task => (
                            <Task
                                task = { task }
                                key = { task.id }
                                deleteTask = { deleteTask } />
                        ))}
                    </div>
                    <button
                        className="RemoveAll-Button"
                        onClick={ deleteTasks }>Ta bort alla
                    </button>
                </div>
            )
        }

        default : 
            return (
                <div>
                    <div className="List">
                        {tasks
                        .map(task => (
                            <Task
                                task = { task }
                                key = { task.id }
                                deleteTask = { deleteTask } />
                        ))}
                    </div>
                    <button
                        className="RemoveAll-Button"
                        onClick={ deleteTasks }>Ta bort alla
                    </button>
                </div>
            )
    }
}
 
export default TasksList;
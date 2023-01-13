import Task from "./Task";

const TasksList = ({ tasks, deleteTask, searchOption, radioOption }) => {

    switch (radioOption) {
        case "All" : 
            if (searchOption === "") {
                return (
                    <div className="List">
                        {tasks
                        .map(task => (
                            <Task
                                task = { task }
                                key = { task.id }
                                deleteTask = { deleteTask } />
                        ))}
                    </div>
                )
            } else {
                return (
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
                )
            }
        
        case "Hushållsarbete" : 
            if (searchOption === "") {
                return (
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
                )
            } else {
                return (
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
                )
            }

        case "Jobb" : 
        if (searchOption === "") {
            return (
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
            )
        } else {
            return (
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
            )
        }

        default : 
            return (
                <div className="List">
                    {tasks
                    .map(task => (
                        <Task
                            task = { task }
                            key = { task.id }
                            deleteTask = { deleteTask } />
                    ))}
                </div>
            )
    }

}
 
export default TasksList;
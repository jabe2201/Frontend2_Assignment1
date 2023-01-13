import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialTodos) => {
    const [tasks, setTasks] = useState(() => {
        try {
            const localTask = localStorage.getItem(key);
            if ( localTask.length > 2 ) {
                return JSON.parse(localTask);
            }

            return initialTodos;

        } catch (err) {
            console.log(err);
            return initialTodos;
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(tasks))
    }, [key, tasks])

    return [tasks, setTasks]
}
 
export default useLocalStorage;
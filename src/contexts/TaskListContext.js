import { createContext, useState, useEffect } from 'react';
import { v4 } from 'uuid';

export const TaskListContext = createContext()

const TaskListContextProvider = props => {

    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title) => {
        setTasks([...tasks, {title, id:v4(), completed:false}])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const updateTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
        setTasks(newTasks)
      }


    const switchComplete = id => {
        const newTasks = tasks.map(task => (task.id === id ? { title: task.title, id, completed: !task.completed } : task))
        
        setTasks(newTasks)
    }
    
    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                switchComplete,
                updateTask
            }}
            >
            {props.children}
        </TaskListContext.Provider>
    );
}

export default TaskListContextProvider;
import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function addTask(title, deadline, status, priority, description) {
    const newTask = {
      id: Math.floor(Math.random() * 900000) + 100000,
      title,
      deadline,
      status,
      priority,
      description,
    };

    setTasks((current) => [...current, newTask]);
  }

  function deleteTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  function editTask(title, deadline, status, priority, description, id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { id, title, deadline, status, description, priority }
          : task
      )
    );
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}

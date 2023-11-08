import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function addTask(title, status, priority, description) {
    const newTask = {
      id: Math.floor(Math.random() * 900000) + 100000,
      title,
      status,
      priority,
      description,
    };

    setTasks((current) => [...current, newTask]);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}

import { createContext, useContext } from "react";

const TasksContext = createContext();

const DUMMY_TASKS = [
  {
    id: "158962",
    title: "Task 1",
    status: "To Do",
    priority: "Urgent",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "125473",
    title: "Task 2",
    status: "To Do",
    priority: "Normal",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "147986",
    title: "Task 3",
    status: "To Do",
    priority: "Urgent",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "123478",
    title: "Task 4",
    status: "In Progress",
    priority: "Urgent",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "100086",
    title: "Task 5",
    status: "In Progress",
    priority: "Urgent",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "102356",
    title: "Task 6",
    status: "Testing",
    priority: "Normal",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "108503",
    title: "Task 7",
    status: "Testing",
    priority: "Urgent",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "141414",
    title: "Task 8",
    status: "Done",
    priority: "Normal",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "170170",
    title: "Task 9",
    status: "Done",
    priority: "Urgent",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
  {
    id: "142536",
    title: "Task 10",
    status: "Done",
    priority: "Urgent",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipmsum lorem ipsum",
  },
];

export function TasksProvider({ children }) {
  return (
    <TasksContext.Provider value={{ tasks: DUMMY_TASKS }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}

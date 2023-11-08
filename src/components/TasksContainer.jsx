import styles from "./TasksContainer.module.css";

import { useTasks } from "../contexts/TasksContext";
import TasksList from "./TasksList";

export default function TasksContainer({ status }) {
  const { title } = status;
  const { tasks } = useTasks();

  const particularTasks = tasks.filter((task) => task.status === title);

  return (
    <section className={styles.tasksContainer}>
      <h1>{title}</h1>
      <TasksList particularTasks={particularTasks} />
    </section>
  );
}

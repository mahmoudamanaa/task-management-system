import styles from "./BacklogContainer.module.css";

import { useTasks } from "../contexts/TasksContext";
import TaskItem from "./TaskItem";

export default function BacklogContainer() {
  const { tasks } = useTasks();

  return (
    <article className={styles.backlogContainer}>
      <h1>Backlog</h1>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} backlog={true} />
      ))}
    </article>
  );
}

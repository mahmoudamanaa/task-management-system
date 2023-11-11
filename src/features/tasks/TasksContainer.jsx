import styles from "./TasksContainer.module.css";

import { useTasks } from "../../contexts/TasksContext";
import TasksList from "./TasksList";
import { useFilter } from "../../contexts/FilterContext";

export default function TasksContainer({ status }) {
  const { title } = status;
  const { tasks } = useTasks();
  const { category, assignee } = useFilter();

  let resultedTasks = tasks.filter((task) => task.status === title);
  if (category) {
    resultedTasks = resultedTasks.filter((task) => task.category === category);
  }
  if (assignee) {
    resultedTasks = resultedTasks.filter((task) => task.assignee === assignee);
  }

  return (
    <section className={styles.tasksContainer}>
      <h1>{title}</h1>
      <TasksList particularTasks={resultedTasks} />
    </section>
  );
}

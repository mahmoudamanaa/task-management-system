import styles from "./BacklogContainer.module.css";

import { useTasks } from "../../contexts/TasksContext";
import TaskItem from "../tasks/TaskItem";
import Filter from "../../ui/filter/Filter";
import { useFilter } from "../../contexts/FilterContext";

export default function BacklogContainer() {
  const { tasks } = useTasks();
  const { category, assignee } = useFilter();

  let resultedTasks = tasks;
  if (category) {
    resultedTasks = resultedTasks.filter((task) => task.category === category);
  }
  if (assignee) {
    resultedTasks = resultedTasks.filter((task) => task.assignee === assignee);
  }

  return (
    <>
      <Filter />
      <article className={styles.backlogContainer}>
        <h1>Backlog</h1>
        {resultedTasks.map((task) => (
          <TaskItem key={task.id} task={task} backlog={true} />
        ))}
      </article>
    </>
  );
}

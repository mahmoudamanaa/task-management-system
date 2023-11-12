import styles from "./TasksContainer.module.css";

import { useTasks } from "../../contexts/TasksContext";
import TasksList from "./TasksList";
import { useFilter } from "../../contexts/FilterContext";
import { useDrop } from "react-dnd";

export default function TasksContainer({ status, onTaskMove }) {
  const { title } = status;
  const { tasks } = useTasks();
  const { category, assignee } = useFilter();

  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => onTaskMove(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  let resultedTasks = tasks.filter((task) => task.status === title);
  if (category) {
    resultedTasks = resultedTasks.filter((task) => task.category === category);
  }
  if (assignee) {
    resultedTasks = resultedTasks.filter((task) => task.assignee === assignee);
  }

  return (
    <section className={styles.tasksContainer} ref={drop}>
      <h1>{title}</h1>
      <TasksList particularTasks={resultedTasks} />
    </section>
  );
}

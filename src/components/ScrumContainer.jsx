import styles from "./ScrumContainer.module.css";
import TasksContainer from "./TasksContainer";

const TASKS_STATUSES = [
  { title: "To Do" },
  { title: "In Progress" },
  { title: "Testing" },
  { title: "Done" },
];

export default function ScrumContainer() {
  return (
    <article className={styles.scrumContainer}>
      {TASKS_STATUSES.map((status) => (
        <TasksContainer key={status.title} status={status} />
      ))}
    </article>
  );
}

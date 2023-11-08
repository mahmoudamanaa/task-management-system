import styles from "./TaskItem.module.css";

export default function TaskItem({ task }) {
  const { title, priority, description } = task;

  return (
    <div className={styles.taskItem}>
      <h3>{title}</h3>
      <p className={styles.priority}>Priority: {priority}</p>
      <p>{description.slice(0, 50)}...</p>
    </div>
  );
}

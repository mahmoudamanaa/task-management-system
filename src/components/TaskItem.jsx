import styles from "./TaskItem.module.css";

export default function TaskItem({ task, backlog }) {
  const { title, priority, description, status } = task;

  return (
    <div
      className={`${styles.taskItem} ${backlog ? styles.taskItemBacklog : ""}`}
    >
      <h3>{title}</h3>
      <p
        className={`${styles.priority} ${
          backlog ? styles.priorityBacklog : ""
        }`}
      >
        {priority}
      </p>
      {backlog && <p className={backlog ? styles.status : ""}>{status}</p>}
      <p>{description.slice(0, 50)}...</p>
    </div>
  );
}

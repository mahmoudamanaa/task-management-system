import styles from "./TaskView.module.css";

function TaskView({ task }) {
  return (
    <div className={styles.taskView}>
      <h1>{task.title}</h1>
      <div className={styles.viewFlex}>
        <p className={styles.priority}>Priority: {task.priority}</p>
        <p className={styles.status}>Status: {task.status}</p>
      </div>
      <p>Deadline: {task.deadline}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Category: {task.category}</p>
      <p className={styles.description}>{task.description}</p>
    </div>
  );
}

export default TaskView;

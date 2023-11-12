import styles from "./TaskItem.module.css";

import Button from "../../ui/form/Button";
import { useTasks } from "../../contexts/TasksContext";
import { usePopup } from "../../contexts/PopupContext";
import Form from "../../ui/form/Form";
import { useDrag } from "react-dnd";

export default function TaskItem({ task, backlog }) {
  const {
    title,
    priority,
    description,
    status,
    deadline,
    assignee,
    category,
    id,
  } = task;

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const { deleteTask } = useTasks();
  const { openPopup } = usePopup();

  const popupElement = <Form type="edit" task={task} />;

  const buttons = [
    { type: "button", text: "Edit", onClick: () => openPopup(popupElement) },
    { type: "button", text: "Delete", onClick: () => deleteTask(id) },
  ];

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className={`${styles.taskItem} ${backlog ? styles.taskItemBacklog : ""}`}
    >
      <h3>{title}</h3>
      <p>Deadline: {deadline}</p>
      <p>Assignee: {assignee}</p>
      <p>Category: {category}</p>
      <p
        className={`${styles.priority} ${
          backlog ? styles.priorityBacklog : ""
        }`}
      >
        {priority}
      </p>
      {backlog && <p className={backlog ? styles.status : ""}>{status}</p>}
      <p>{description.slice(0, 50)}...</p>
      <div className={styles.actions}>
        {buttons.map((button) => (
          <Button
            key={button.text}
            type={button.type}
            text={button.text}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
}

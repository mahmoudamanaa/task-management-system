import TaskItem from "./TaskItem";

export default function TasksList({ particularTasks }) {
  return (
    <div>
      {particularTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

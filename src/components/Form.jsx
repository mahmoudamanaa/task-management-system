import styles from "./Form.module.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTasks } from "../contexts/TasksContext";
import { useNavigate } from "react-router";

const schema = yup.object().shape({
  title: yup.string().required(),
  status: yup.string().required(),
  priority: yup.string().required(),
  description: yup.string().required(),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { addTask } = useTasks();

  const navigate = useNavigate();

  function handleFormSubmit(data) {
    addTask(data.title, data.status, data.priority, data.description);
    reset();
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles.formAction}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title here"
          {...register("title")}
          className={errors.title ? styles.inputError : ""}
        />
        <p>{errors.title?.message}</p>
      </div>
      <div className={styles.formAction}>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          {...register("status")}
          className={errors.status ? styles.inputError : ""}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Testing">Testing</option>
          <option value="Done">Done</option>
        </select>
        <p>{errors.status?.message}</p>
      </div>
      <div className={styles.formAction}>
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          {...register("priority")}
          className={errors.priority ? styles.inputError : ""}
        >
          <option value="Urgent">Urgent</option>
          <option value="Normal">Normal</option>
        </select>
        <p>{errors.priority?.message}</p>
      </div>
      <div className={styles.formAction}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          placeholder="Write something"
          {...register("description")}
          className={errors.description ? styles.inputError : ""}
        ></textarea>
        <p>{errors.description?.message}</p>
      </div>
      <div className={styles.formAction}>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

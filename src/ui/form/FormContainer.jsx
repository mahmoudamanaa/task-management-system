import Form from "./Form";
import styles from "./FormContainer.module.css";

export default function FormContainer() {
  return (
    <article className={styles.formContainer}>
      <h1>Add New Task</h1>
      <Form />
    </article>
  );
}

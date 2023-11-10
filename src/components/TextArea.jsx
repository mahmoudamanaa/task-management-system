import styles from "./TextArea.module.css";

export default function TextArea({ name, placeholder, register, errors }) {
  return (
    <div className={styles.formAction}>
      <label htmlFor={name}>{name}</label>
      <textarea
        name={name}
        id={name}
        rows={5}
        placeholder={placeholder}
        {...register(name)}
        className={errors[name] ? styles.inputError : ""}
      ></textarea>
      <p>{errors[name]?.message}</p>
    </div>
  );
}

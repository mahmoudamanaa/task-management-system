import styles from "./Input.module.css";

export default function Input({ name, type, placeholder, register, errors }) {
  return (
    <div className={styles.formAction}>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className={errors[name] ? styles.inputError : ""}
      />
      <p>{errors[name]?.message}</p>
    </div>
  );
}

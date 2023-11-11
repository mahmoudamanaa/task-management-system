import styles from "./Select.module.css";

export default function Select({ name, register, errors, options }) {
  return (
    <div className={styles.formAction}>
      <label htmlFor={name}>{name}</label>
      <select
        name={name}
        id={name}
        {...register(name)}
        className={errors[name] ? styles.inputError : ""}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <p>{errors[name]?.message}</p>
    </div>
  );
}

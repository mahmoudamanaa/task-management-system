import styles from "./Button.module.css";

export default function Button({ type, text, onClick }) {
  return (
    <div className={styles.formAction}>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

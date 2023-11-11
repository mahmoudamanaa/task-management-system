import { useFilter } from "../../contexts/FilterContext";
import styles from "./FilterItem.module.css";

export default function FilterItem({ title, options }) {
  const { category, assignee, setFilter } = useFilter();

  function handleClick(value) {
    setFilter(title, value);
  }

  return (
    <section className={styles.filterItem}>
      <h3>{title}:</h3>
      {options.map((option) => (
        <span
          key={option.value}
          onClick={() => handleClick(option.value)}
          className={
            option.value === assignee || option.value === category
              ? styles.clicked
              : ""
          }
        >
          {option.text}
        </span>
      ))}
    </section>
  );
}

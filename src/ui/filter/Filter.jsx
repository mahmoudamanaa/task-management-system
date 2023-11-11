import { useFilter } from "../../contexts/FilterContext";
import Button from "../form/Button";
import styles from "./Filter.module.css";
import FilterItem from "./FilterItem";

const filters = [
  {
    filterBy: "category",
    options: [
      { value: "Frontend", text: "Frontend" },
      { value: "Backend", text: "Backend" },
      { value: "UI/UX", text: "UI/UX" },
    ],
  },
  {
    filterBy: "assignee",
    options: [
      { value: "Mohamed", text: "Mohamed" },
      { value: "Mahmoud", text: "Mahmoud" },
      { value: "Ahmed", text: "Ahmed" },
    ],
  },
];

export default function Filter() {
  const { clearFilter } = useFilter();

  return (
    <article className={styles.filter}>
      <h2>Filter By:</h2>
      <Button type="button" text="Clear Filter" onClick={clearFilter} />
      {filters.map((filter) => (
        <FilterItem
          key={filter.filterBy}
          title={filter.filterBy}
          options={filter.options}
        />
      ))}
    </article>
  );
}

import styles from "./Navbar.module.css";

import { Link, NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { title: "Add Task", href: "/add-task" },
  { title: "Backlog", href: "/backlog" },
];

export default function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/">
          <h1>Task</h1>
        </Link>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.title}>
              <NavLink to={item.href}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

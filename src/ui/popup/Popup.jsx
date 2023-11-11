import styles from "./Popup.module.css";

import Button from "../form/Button";
import { usePopup } from "../../contexts/PopupContext";

export default function Popup() {
  const { open, element, closePopup } = usePopup();

  return (
    open && (
      <article className={styles.popupOverlay}>
        <section>
          <div className={styles.close}>
            <Button type="button" text="Close" onClick={closePopup} />
          </div>
          <div>{element}</div>
        </section>
      </article>
    )
  );
}

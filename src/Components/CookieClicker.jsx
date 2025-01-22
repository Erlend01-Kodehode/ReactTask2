import { useState } from "react";
import styles from "./CookieClicker.module.css";

function CookieClicker() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((val) => val + 1);
  }
  return (
    <div>
      <h2>
        You have baked <span className={styles.CookieCounter}>{count}</span>{" "}
        Cookies
      </h2>
      <button onClick={handleIncrement} className={styles.CookieButton}>
        <img
          src="./images/cookie-1.png"
          alt="Cookie"
          className={styles.CookieClicker}
        />
      </button>
    </div>
  );
}

export default CookieClicker;

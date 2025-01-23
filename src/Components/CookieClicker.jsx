import { useState } from "react";
import styles from "./CookieClicker.module.css";

function CookieClicker() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((val) => val + 1);
  }
  return (
    <div className={styles.CookieContainer}>
      <h2>
        You've baked <span className={styles.CookieCounter}>{count}</span>{" "}
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

import { useEffect, useState } from "react";
import styles from "./CatFacts.module.css";

function CatFacts() {
  // useState declaring
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Api useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok) {
          throw new Error(`HTTP Error. Status ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // I hate
  //   useEffect(() => {
  //     if (data) {
  //       console.log(data);
  //     }
  //   }, [data]);

  return (
    <div className={styles.FactsContainer}>
      {loading && <p className={styles.FactsLoading}>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && data && (
        <>
          <h2>Some cat facts</h2>
          <ul>
            {data.data.map((fact, i) => {
              return <li key={i}>{fact.fact}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default CatFacts;

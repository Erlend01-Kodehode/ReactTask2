import { mockData } from "../data/data";
import { useState } from "react";
import styles from "./UsersComp.module.css";

function UsersComp() {
  const [data, setData] = useState(mockData);
  const [newData, setNewData] = useState({});

  function handleUpdate(e) {
    const { name, value } = e.target;
    setNewData((val) => ({ ...val, [name]: value }));
  }

  function addUser() {
    if (newData.username && newData.email) {
      setData((val) => [...val, newData]);
      setNewData({});
    } else {
      alert("All data must be filled out");
    }
  }

  return (
    <div className={styles.UsersCompContainer}>
      <ul>
        {data.map((person, i) => {
          return (
            <li key={i}>
              Username: {person.username}. Email: {person.email}
            </li>
          );
        })}
      </ul>
      <h3>Add User</h3>
      <label htmlFor="username">Add Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={newData.username || ""}
        onChange={handleUpdate}
      />
      <label htmlFor="email">Add Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newData.email || ""}
        onChange={handleUpdate}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default UsersComp;

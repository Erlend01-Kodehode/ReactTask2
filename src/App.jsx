import { useState, useEffect } from "react";
import CookieClicker from "./Components/CookieClicker";
import CatFacts from "./Components/CatFacts";
import UsersComp from "./Components/UsersComp";

function App() {
  return (
    <div className="Row">
      <CookieClicker />
      <CatFacts />
      <UsersComp />
    </div>
  );
}

export default App;

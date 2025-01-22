import { useState, useEffect } from "react";
import CookieClicker from "./Components/CookieClicker";
import CatFacts from "./Components/CatFacts";
import UsersComp from "./Components/UsersComp";

function App() {
  return (
    <>
      <CookieClicker />
      <CatFacts />
      <UsersComp />
    </>
  );
}

export default App;

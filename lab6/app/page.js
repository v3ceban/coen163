"use client";

import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

export default function App() {
  const [currentMain, setMain] = useState("home");
  const navClick = (item) => {
    setMain(item);
  };

  return (
    <>
      <Header navClick={navClick} />
      <Main currentMain={currentMain} navClick={navClick} />
    </>
  );
}

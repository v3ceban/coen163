import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [currentMain, setMain] = useState("home");
  const navClick = (item) => {
    setMain(item);
  };

  return (
    <>
      <Header navClick={navClick} />
      <Main currentMain={currentMain} />
    </>
  );
}

export default App;

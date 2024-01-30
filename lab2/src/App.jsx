/*
  The code is a React component called "App". It imports the "useState" hook
  from the "react" library, as well as two other components called "Header" and
  "Main" from their respective files. Inside the "App" component, there is a
  state variable called "currentMain" and a function called "setMain" that is
  used to update the value of "currentMain". The initial value of "currentMain"
  is set to "home" using the "useState" hook. There is also a function called
  "navClick" that takes an argument "item". This function is used to update the
  value of "currentMain" when a navigation item is clicked. It calls the
  "setMain" function and passes the clicked item as an argument. The "App"
  component returns JSX code that renders the "Header" and "Main" components.
  The "Header" component is passed the "navClick" function as a prop, allowing
  it to call the function when a navigation item is clicked. The "Main"
  component is passed the "currentMain" state variable as a prop, allowing it to
  display the appropriate content based on the current value of "currentMain".
  Finally, the "App" component is exported as the default export of the module,
  making it available for use in other parts of the application.
*/

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

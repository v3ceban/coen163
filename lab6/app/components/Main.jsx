import { useEffect, useState } from "react";
import Welcome from "./pages/Wellcome.jsx";
import Home from "./pages/Home.jsx";
import Info from "./pages/Info.jsx";
import Description from "./pages/Description.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";

//eslint-disable-next-line
export default function Main({ currentMain, navClick }) {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleDismiss = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    // Do nothing
  }, []);

  const getPageContent = () => {
    switch (currentMain) {
      case "home":
        return <Home />;
      case "info":
        return <Info />;
      case "description":
        return <Description />;
      case "FAQ":
        return <FAQ />;
      case "contact":
        return <Contact setPage={navClick} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {showWelcome && <Welcome Dismiss={handleDismiss} />}
      <main className={currentMain}>{getPageContent()}</main>
    </>
  );
}

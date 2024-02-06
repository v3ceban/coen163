import { useEffect, useState } from "react";
import Welcome from "./pages/Wellcome";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Description from "./pages/Description";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

export default function Main({ currentMain }) {
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
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {showWelcome && <Welcome Dismiss={handleDismiss} />}
      {getPageContent()}
    </>
  );
}

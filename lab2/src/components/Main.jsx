import Home from "./pages/Home";
import Info from "./pages/Info";
import Description from "./pages/Description";

//eslint-disable-next-line
export default function Main({ currentMain }) {
  let content = null;
  switch (currentMain) {
    case "home":
      content = <Home />;
      break;
    case "info":
      content = <Info />;
      break;
    case "description":
      content = <Description />;
      break;
    default:
      content = <Home />;
  }
  return <>{content}</>;
}

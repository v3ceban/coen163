// eslint-disable-next-line
export default function Header({ navClick }) {
  const handleClick = (page) => {
    navClick(page);
  };

  return (
    <header>
      <nav>
        <h1>
          <a href="#" onClick={() => handleClick("home")}>
            Waste Rewarder
          </a>
        </h1>
        <ul>
          <li>
            <a href="#" onClick={() => handleClick("info")}>
              Information
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick("description")}>
              Description
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// eslint-disable-next-line
export default function Header({ navClick }) {
  const handleClick = (page, event) => {
    event.preventDefault();
    navClick(page);
  };

  const pages = [
    { name: "info", label: "Information" },
    { name: "description", label: "Description" },
    { name: "FAQ", label: "FAQ" },
    { name: "contact", label: "Contact" },
  ];

  return (
    <header>
      <nav>
        <h1>
          <a href="#" onClick={(event) => handleClick("home", event)}>
            Waste Rewarder
          </a>
        </h1>
        <ul>
          {pages.map((page) => (
            <li key={page.name}>
              <a href="#" onClick={(event) => handleClick(page.name, event)}>
                {page.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

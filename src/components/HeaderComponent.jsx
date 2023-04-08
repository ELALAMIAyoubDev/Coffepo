import style from "./HeaderComponent.module.css";
import logo from "../assets/logo-coffepo.svg";
const HeaderComponent = () => {
  const links = [
    { id: 1, name: "home", path: "#home" },
    { id: 2, name: "about us", path: "#about" },
    { id: 3, name: "product", path: "#product" },
    { id: 4, name: "location", path: "" },
    { id: 5, name: "contact", path: "" },
  ];

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="logo Coffepo" />
      </div>
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          {links.map((link) => (
            <li key={link.id}>
              <a className={style.navigation__link} href={link.path}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;

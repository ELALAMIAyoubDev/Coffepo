import style from "./HeaderComponent.module.css";
import logo from "../assets/logo-coffepo.svg";
const HeaderComponent = () => {
  const links = [
    { id: 1, name: "home", path: "" },
    { id: 2, name: "product", path: "" },
    { id: 3, name: "location", path: "" },
    { id: 4, name: "contact", path: "" },
  ];

  return (
    <header className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="logo Coffepo" />
      </div>
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          {links.map((link) => (
            <li key={link.id}>
              <a className={style.navigation__link} href="">
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

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import style from "./HomeComponent.module.css";

const HomeComponent = () => {
  const lists = [
    {
      id: 1,
      name: "intagram",
      icon: <FaInstagram className={style.icon} />,
      path: "",
    },
    {
      id: 2,
      name: "facebook",
      icon: <FaFacebook className={style.icon} />,
      path: "",
    },
    {
      id: 3,
      name: "intagram",
      icon: <FaTwitter className={style.icon} />,
      path: "",
    },
  ];
  return (
    <section id="home" className={style.home}>
      <div className={style.home_text}>
        <h1>All Love Coffe</h1>
        <p>So we made coffe So We made love </p>
      </div>
      <div className={style.list_icons}>
        <ul className={style.list_icons__list}>
          {lists.map((list) => (
            <li className={style.icon_container} key={list.id}>
              {list.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeComponent;

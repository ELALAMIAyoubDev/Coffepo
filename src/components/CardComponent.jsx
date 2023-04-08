import style from "./CardComponent.module.css";

const CardComponent = () => {
  return (
    <div className={style.card}>
      <div className={style.card_content}></div>
    </div>
  );
};

export default CardComponent;

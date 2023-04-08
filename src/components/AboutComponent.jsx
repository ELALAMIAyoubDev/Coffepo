import style from "./AboutComponent.module.css";

const AboutComponent = () => {
  return (
    <section id="about" className={style.about_section}>
      <div className={style.about_main}>
        <h1 className={style.about_main__title}>about us</h1>
        <div className={style.about_content}>
          <p className={style.about_content__para}></p>
          <div className={style.about_content__img}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

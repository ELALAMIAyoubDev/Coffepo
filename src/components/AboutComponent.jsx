import style from "./AboutComponent.module.css";
import aboutImg from "../assets/about-img.jpg";

const AboutComponent = () => {
  return (
    <section id="about" className={style.about_section}>
      <div className={style.about_main}>
        <h1 className={style.about_main__title}>about us</h1>
        <div className={style.about_content}>
          <div className={style.about_content__text}>
            <h1 className={style.about_content__text__title}>
              why we love make coffe
            </h1>
            <p className={style.about_content__text__para}>
              Coffee has been a beloved beverage for centuries and continues to
              be a go-to choice for millions of people around the world. There's
              just something special about the rich aroma and delicious taste of
              freshly brewed coffee that makes it irresistible! But coffee isn't
              just about satisfying our taste buds - it can also be a wonderful
              way to connect with others and boost our productivity. Whether
              you're catching up with friends over a cup of coffee, or using it
              to get energized and focused for the day ahead, there's no denying
              the positive impact coffee can have on our lives. So why not take
              a moment to savor your next cup of coffee and enjoy all the
              wonderful benefits it has to offer!
            </p>
          </div>
          <div className={style.about_content__img}>
            <img src={aboutImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

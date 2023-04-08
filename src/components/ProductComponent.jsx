import CardComponent from "./CardComponent";
import style from "./ProductComponent.module.css";

const ProductComponent = () => {
  return (
    <section id="product" className={style.product_section}>
      <div className={style.product_main}>
        <h1 className={style.product_main__title}>product</h1>

        <CardComponent />
      </div>
    </section>
  );
};

export default ProductComponent;

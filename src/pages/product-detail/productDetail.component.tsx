import useLocalization from "assets/lang";
import product from "assets/images/statics/product.svg";
import { useProductDetailStyles } from "./productDetail.style";
import CreditStaticItemComponent from "./components/creditStaticItem.component";

const ProductDetailComponent = () => {
  const translate = useLocalization();
  const classes = useProductDetailStyles();
  return (
    <>
      <section className={classes.productDetailSec}>
        <div className="container">
          <div className={`${classes.productDetail} row justify-between`}>
            <div className="col-md-5 col-sm-12 p-0">
              <h1 className={classes.title}>
                Title for Products or Lorem Ipsum motto
              </h1>
            </div>
            <div
              className={`${classes.productImg} col-md-7 col-sm-12 p-0 pl-100`}
            >
              <img src={product} alt="" />
            </div>
          </div>
          <span className={`${classes.credit_about}`}>
            {translate("credit_about")}
          </span>
        </div>
      </section>
      <section className={classes.creditAbout}>
        <div className="row d-flex align-center mt-8">
          <div className="col-lg-5">
            <h1 className={classes.credit_about_title}>
              Id duis id turpis mi quisque. Nulla.
            </h1>
          </div>
          <div className="col-lg-6">
            <p className={classes.credit_about_description}>
              Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
              Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna
              egestas est aliquet facilisis elit sit. Massa libero turpis
              facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu
              senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo
              libero diam.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="creditStatistic">
        <CreditStaticItemComponent/>
      </section>
      <section className="creditCalc">

      </section>
    </>
  );
};
export default ProductDetailComponent;

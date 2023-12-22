import useLocalization from "assets/lang";
import product from "assets/images/statics/product.svg";
import { useProductDetailStyles } from "./productDetail.style";
import CreditStaticItemComponent from "./components/creditStaticItem.component";
import { useParams } from "react-router-dom";
import { useProductDetail } from "./actions/productDetail.query";

const ProductDetailComponent = () => {
  const translate = useLocalization();
  const classes = useProductDetailStyles();
  const { id } = useParams();
  const safeId: string = id?.toString() || "";
  const product_id: number = id !== null ? parseInt(safeId) : 0;

  const { data } = useProductDetail(product_id);
  console.log(data);

  return (
    <>
      <div className={classes.overlay}></div>
      <section className={classes.productDetailSec}>
        <div className="container">
          <div className={`${classes.productDetail} row justify-between`}>
            <div className="col-md-5 col-sm-12 p-0">
              <h1 className={classes.title}>{data?.title}</h1>
            </div>
            <div
              className={`${classes.productImg} col-md-7 col-sm-12 p-0 pl-100`}
            >
              <img src={product} alt="" />
            </div>
          </div>
        </div>
        <span className={`${classes.credit_about}`}>
          {translate("credit_about")}
        </span>
      </section>
      <section className={classes.creditAbout}>
        <div className="row d-flex justify-between align-center mt-8">
          <div className="col-lg-5">
            <h1 className={classes.credit_about_title}>{data?.credit_title}</h1>
          </div>
          <div className="col-lg-6">
            <p className={classes.credit_about_description}>
              {data?.credit_description}
            </p>
          </div>
        </div>
      </section>
      <section className="creditStatistic">
        <CreditStaticItemComponent creditProps={data?.credit_information} />
      </section>
      <section className="creditCalc"></section>
    </>
  );
};
export default ProductDetailComponent;

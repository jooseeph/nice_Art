import { useProductItemStyles } from "./productItem.style";
import { FaArrowRight } from "react-icons/fa6";
import useLocalization from "assets/lang";
import { NavLink } from "react-router-dom";
import { Routes } from "router/routes";
import { useProducts } from "../actions/products.query";
import product_img from "assets/images/statics/product.svg"

const ProductItemComponent = () => {
  const classes = useProductItemStyles();
  const translate = useLocalization();
  const { data } = useProducts();
  return (
    <>
      {data &&
        data.map((product, index) => (
          <div key={index} className={`${classes.productItem} mb-40`}>
            <div className="row">
              <div className="col-md-7">
                <h3 className={classes.productItemTitle}>{product.title}</h3>
                <p className={classes.productDescription}>
                  {product.description}
                </p>
                <div className={classes.creditDetail}>
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <label htmlFor="">
                        {product?.credit_information[3].credit_infor_title}
                      </label>
                      <span>
                        {
                          product?.credit_information[3]
                            .credit_infor_description
                        }
                      </span>
                    </div>
                    <div className="col-md-4 col-6">
                      <label htmlFor="">
                        {product?.credit_information[0].credit_infor_title}
                      </label>
                      <span>
                        {
                          product?.credit_information[0]
                            .credit_infor_description
                        }
                      </span>
                    </div>
                    <div className={`${classes.mobileNone} col-md-4`}>
                      <label htmlFor="">
                        {product?.credit_information[1].credit_infor_title}
                      </label>
                      <span>
                        {
                          product?.credit_information[1]
                            .credit_infor_description
                        }
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`${classes.productDetailBtn} mt-40`}>
                  <NavLink to={`${Routes.productdetail}/${product.id}`}>
                    <button className={classes.detailBtn}>
                      <span className="mr-8">
                        {translate("productDetailBtn")}
                      </span>
                      <FaArrowRight className={classes.rightArrow} />
                    </button>
                  </NavLink>
                  <div className={`${classes.productImgMobile} d-none`}>
                    <img src={product_img} alt="product" />
                  </div>
                </div>
              </div>
              <div className="col-md-5 d-flex align-center justify-end">
                <div className={`${classes.productImg}`}>
                  <img src={product_img} alt="product" />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductItemComponent;



import useLocalization from "assets/lang";
import ProductItemComponent from "./components/productItem.component";
import { useProductsStyles } from "./products.style";

const ProductsComponent = () => {
  const classes = useProductsStyles();
  const translate = useLocalization();
  return (
    <section className={`${classes.products}`}>
      <div className='container'>
        <div className='row justify-between mb-20'>
          <div className='col-md-6 col-sm-12 p-0'>
            <h1 className={classes.title}>{translate('productTitle')}</h1>
          </div>
          <div className={`${classes.productDesc} col-md-6 col-sm-12`}>
            <h2 className={classes.descripTitle}>{translate('productDescTitle')}</h2>
            <p className={classes.description}>{translate('productDescription')}</p>
          </div>
        </div>
      </div>
      <div>
        <ProductItemComponent />
      </div>
    </section>
  );
};

export default ProductsComponent;




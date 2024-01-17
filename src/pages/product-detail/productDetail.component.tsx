import useLocalization from 'assets/lang';
import { useProductDetailStyles } from './productDetail.style';
import CreditStaticItemComponent from './components/creditStaticItem.component';
import { useParams } from 'react-router-dom';
import { useProducts } from 'pages/products/actions/products.query';

const ProductDetailComponent = () => {
  const translate = useLocalization();
  const classes = useProductDetailStyles();
  const { id } = useParams();
  const safeId: string = id?.toString() || '';
  const product_id: number = id !== null ? parseInt(safeId) : 0;

  const { data } = useProducts();
  const selectedProduct = data?.find((product) => product.id === product_id);

  return (
    <>
      <div className={classes.overlay}></div>
      <div className='container'>
        <section className={classes.productDetailSec}>
          <div className={classes.productDetail}>
            <div className='row justify-between'>
              <div className='col-md-5 col-sm-12'>
                <h1 className={classes.title}>{selectedProduct?.name}</h1>
              </div>
              <div className={`col-md-7 col-sm-12 p-0 pl-100`}>
                <div className={classes.productImg}>
                  <img src={selectedProduct?.file.url} alt='' />
                </div>
              </div>
            </div>
          </div>
          <span className={`${classes.credit_about}`}>
            {translate('credit_about')}
          </span>
        </section>
        <section className={classes.creditAbout}>
          <div className='row d-flex justify-between align-center mt-8'>
            <div className='col-lg-5'>
              <h1 className={classes.credit_about_title}>
                {selectedProduct?.about.title}
              </h1>
            </div>
            <div className='col-lg-6'>
              <p className={classes.credit_about_description}>
                {selectedProduct?.about.description}
              </p>
            </div>
          </div>
        </section>
        <section className='creditStatistic'>
          <CreditStaticItemComponent creditProps={selectedProduct?.features} />
        </section>
        <section className='creditCalc'></section>
      </div>
    </>
  );
};
export default ProductDetailComponent;

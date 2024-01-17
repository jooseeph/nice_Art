import { useProductItemStyles } from './productItem.style';
import { FaArrowRight } from 'react-icons/fa6';
import useLocalization from 'assets/lang';
import { NavLink } from 'react-router-dom';
import { Routes } from 'router/routes';
import { useProducts } from '../actions/products.query';
import { generateGuid } from 'core/helpers/generate-guid';

const ProductItemComponent = () => {
  const classes = useProductItemStyles();
  const translate = useLocalization();
  const { data } = useProducts();
  console.log(data);

  return (
    <>
      {data &&
        data.map((product) => (
          <div key={generateGuid()} className={`${classes.productItem} mb-40`}>
            <div className='row'>
              <div className='col-md-7'>
                <h3 className={classes.productItemTitle}>
                  {product.about.title}
                </h3>
                <p className={classes.productDescription}>
                  {product.about.description}
                </p>
                <div className={classes.creditDetail}>
                  <div className='row'>
                    <div className='col-md-4 col-6'>
                      <label htmlFor=''>Müddət (Ay)</label>
                      <span>{product?.features.period}</span>
                    </div>
                    <div className='col-md-4 col-6'>
                      <label htmlFor=''>Məbləğ (AZN)</label>
                      <span>{product?.features.amount}</span>
                    </div>
                    <div className='col-md-4'>
                      <div className={`${classes.mobileNone}`}>
                        <label htmlFor=''>Faiz dərəcəsi (%)</label>
                        <span>{product?.features.initialPayment}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${classes.productDetailBtn} mt-40`}>
                  <NavLink to={`${Routes.productdetail}/${product.id}`}>
                    <button className={classes.detailBtn}>
                      <span className='mr-8'>
                        {translate('productDetailBtn')}
                      </span>
                      <FaArrowRight className={classes.rightArrow} />
                    </button>
                  </NavLink>
                  <div className={`${classes.productImgMobile} d-none`}>
                    <img src={product.file.url} alt='product' />
                  </div>
                </div>
              </div>
              <div className='col-md-5 d-flex align-center justify-end'>
                <div className={`${classes.productImg}`}>
                  <img src={product.file.url} alt='product' />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductItemComponent;

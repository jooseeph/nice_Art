import ProductItemComponent from "./components/productItem.component";
import { useProductsStyles } from "./products.style";

const ProductsComponent = () => {
  const classes = useProductsStyles();
  return (
    <section className={`${classes.products}`}>
      <div className="container">
        <div className="row justify-between mb-20">
          <div className="col-md-5 col-sm-12 p-0">
            <h1 className={classes.title}>
              Title for Products or Lorem Ipsum motto
            </h1>
          </div>
          <div className={`${classes.productDesc} col-md-7 col-sm-12`}>
            <h2 className={classes.descripTitle}>
              Lectus mauris pulvinar sit?
            </h2>
            <p className={classes.description}>
              Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
              Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna
              egestas est aliquet facilisis elit sit. Massa libero turpis
              facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu
              senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo
              libero diam.
            </p>
          </div>
        </div>
      </div>
      <div >
        <ProductItemComponent />
      </div>
    </section>
  );
};

export default ProductsComponent;




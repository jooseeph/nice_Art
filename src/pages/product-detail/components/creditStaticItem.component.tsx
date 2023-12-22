import { ICreditStaticItem } from "./creditStaticItem";
import { useCreditStaticItemStyles } from "./creditStaticItem.style";
import credit_icon_1 from "assets/images/statics/credit_icon_1.svg";

const CreditStaticItemComponent = ({
  creditProps,
}: {
  creditProps: ICreditStaticItem[];
}) => {
  const classes = useCreditStaticItemStyles();
  if (!creditProps || !Array.isArray(creditProps)) {
    // Eğer creditProps tanımlı değilse veya bir dizi değilse, boş bir JSX döndürün
    return <div>Veri yükleniyor...</div>;
  }

  return (
    <div className="row">
      {creditProps.map((creditInf, index) => {
        return (
          <div key={index} className="col-md-4">
            <div className={classes.credit_detail_box}>
              <div className={classes.icon}>
                <img src={credit_icon_1} alt="" />
              </div>
              <p className={classes.icon_title}>
                {creditInf.credit_infor_title}
              </p>
              <span className={classes.icon_descrip}>
                {creditInf.credit_infor_description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreditStaticItemComponent;

import { generateGuid } from "core/helpers/generate-guid";
import { ICreditStaticItem } from "./creditStaticItem";
import { useCreditStaticItemStyles } from "./creditStaticItem.style";
import credit_icon_1 from "assets/images/statics/credit_icon_1.svg";

interface CreditStaticItemComponentProps {
  creditProps?: ICreditStaticItem | ICreditStaticItem[] | undefined;
}

const CreditStaticItemComponent = ({
  creditProps,
}: CreditStaticItemComponentProps) => {
  const classes = useCreditStaticItemStyles();
  if (
    !creditProps ||
    (Array.isArray(creditProps) && creditProps.length === 0)
  ) {
    return <div>Məlumatlar yüklənir...</div>;
  }

  const staticItems = Array.isArray(creditProps) ? creditProps : [creditProps];

  return (
    <div className="row">
      {staticItems.map((creditInf) => {
        return (
          <div key={generateGuid()} className="col-md-4">
            <div className={classes.credit_detail_box}>
              <div className={classes.icon}>
                <img src={credit_icon_1} alt="" />
              </div>
              <p className={classes.icon_title}>Kreditin məbləği (AZN)</p>
              <span className={classes.icon_descrip}>{creditInf?.amount}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreditStaticItemComponent;

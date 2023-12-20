import { useCreditStaticItemStyles } from "./creditStaticItem.style";
import credit_icon_1 from "assets/images/statics/credit_icon_1.svg";


const CreditStaticItemComponent = () => {
    const classes = useCreditStaticItemStyles();
    return (
      <div className="row">
        <div className="col-md-4">
          <div className={classes.credit_detail_box}>
            <div className={classes.icon}>
              <img src={credit_icon_1} alt="" />
            </div>
            <p className={classes.icon_title}>Kreditin məbləği (AZN)</p>
            <span className={classes.icon_descrip}>
              Min. 5 000 - max. 500 000
            </span>
          </div>
        </div>
      </div>
    );
};

export default CreditStaticItemComponent;
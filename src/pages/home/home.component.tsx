import { ArrowDown, ArrowRight } from "assets/images/icons/arrows";
import { useHomeStyles } from "./home.style";
import homepage1 from "../../assets/images/statics/homepage1.png";
import homepage2 from "../../assets/images/statics/homepage2.png";

const HomeComponent = () => {
  const {
    headerTitle,
    headerText,
    headerBtns,
    productBtn,
    aboutBtn,
    btnText,
    mainImgWrapper,
    mainImg,
    mainImgText,
  } = useHomeStyles();

  return (
    <div>
      <div className="row">
        <div className={`${headerTitle} col-6`}>
          We help you find the perfect loan
        </div>
        <div className={`${headerText} col-6`}>
          Malesuada pellentesque bibendum enim eu sit. Tincidunt eget mi est,
          egestas. Nunc, dignissim amet, purus amet. Amet dictum sit elit urna
          non purus, gravida commodo.
          <div className={headerBtns}>
            <button className={productBtn}>
              <p className={btnText}>Products</p> <ArrowRight />
            </button>
            <button className={aboutBtn}>
              <p className={btnText}>About NICART</p>

              <ArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`${mainImgWrapper} col-12`}>
          <img src={homepage1} className={mainImg} alt="" />
          <p className={mainImgText}>
            Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
            turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
            augue. Egestas et amet neque placerat aliquam tempor. Ultricies
            natoque lacus, id natoque cras. Erat aliquam sollicitudin risus
            semper molestie. Ut mattis nisl faucibus vel tincidunt. Et in
            laoreet faucibus urna quis. Tempus in condimentum malesuada ut
            molestie et in. Lobortis neque aliquam felis ac ac augue elit.
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: 80 }}>
        <div className="col-6">
          <p style={{ color: "#3E6F00", fontSize: 16, fontWeight: "800" }}>
            ABOUT US
          </p>
          <p
            style={{
              color: "#414D44",
              fontSize: 44,
              fontWeight: "800",
              marginTop: 8,
              wordWrap: "break-word",
            }}
          >
            Lectus mauris pulvinar sit.
          </p>
          <p
            style={{
              color: "#414D44",
              fontSize: 16,
              fontWeight: "400",
              marginTop: 8,
            }}
          >
            Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
            turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
            augue. Egestas et amet neque placerat aliquam tempor. Ultricies
            natoque lacus, id natoque cras. Erat aliquam sollicitudin risus
            semper molestie. Ut mattis nisl faucibus vel tincidunt.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                color: "#414D44",
                fontSize: 20,
                fontWeight: "500",
                marginTop: 50,
              }}
            >
              Learn more
            </p>
            <div style={{ height: 4, width: 92, background: "#3E6F00" }}></div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <img src={homepage2} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

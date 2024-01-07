import { ArrowDown, ArrowRight } from "assets/images/icons/arrows";
import { useHomeStyles } from "./home.style";
import homepage1 from "../../assets/images/statics/homepage1.png";
import homepage2 from "../../assets/images/statics/homepage2.png";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { Routes } from "router/routes";

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
    aboutUsTxt,
    aboutUsSecondaryTxt,
    mainTxt,
    learnMore,
    learnMoreWrapper,
    productsTxt,
    productsTitle,
    productsContent,
    aboutUsWrapper,
    headerWrapper,
  } = useHomeStyles();

  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className={`${headerWrapper} row`}>
        <div className={`${headerTitle} col-6`}>
          We help you find the perfect loan
        </div>
        <div className={`${headerText} col-6`}>
          Malesuada pellentesque bibendum enim eu sit. Tincidunt eget mi est,
          egestas. Nunc, dignissim amet, purus amet. Amet dictum sit elit urna
          non purus, gravida commodo.
          <div className={headerBtns}>
            <button
              className={productBtn}
              onClick={() => navigate(Routes.products)}
            >
              <p className={btnText}>Products</p> <ArrowRight />
            </button>
            <button className={aboutBtn} onClick={() => handleClick()}>
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
      <div className={`${aboutUsWrapper} row`}>
        <div className="col-6" ref={ref} style={{ padding: 0 }}>
          <p className={aboutUsTxt}>ABOUT US</p>
          <p className={aboutUsSecondaryTxt}>Lectus mauris pulvinar sit.</p>
          <p className={mainTxt}>
            Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
            turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
            augue. Egestas et amet neque placerat aliquam tempor. Ultricies
            natoque lacus, id natoque cras. Erat aliquam sollicitudin risus
            semper molestie. Ut mattis nisl faucibus vel tincidunt.
          </p>
          <div className={learnMoreWrapper}>
            <p className={learnMore}>Learn more</p>
            <div style={{ height: 4, width: 92, background: "#3E6F00" }}></div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <img src={homepage2} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{ marginTop: 200 }}>
          <p className={productsTxt}>Products</p>
        </div>
      </div>
      <div className="row">
        <div
          className="col-6"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className={productsTitle}>Daşınmaz əmlak krediti</p>
        </div>
        <div
          className="col-6"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className={productsContent}>
            Quisque bibendum adipiscing sem massa auctor nulla donec mi integer.
            Suspendisse eget convallis magna viverra amet. Ut quam scelerisque
            massa morbi ac pharetra. Sit at elit non et diam. Quam a id egestas
            elit. Posuere cursus accumsan urna viverra. Sit egestas et convallis
            donec risus sapien enim. Gravida praesent adipiscin
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

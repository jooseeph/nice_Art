import { ArrowDown, ArrowRight } from "assets/images/icons/arrows";
import { useHomeStyles } from "./home.style";
import homepage1 from "../../assets/images/statics/homepage1.png";
import homepage2 from "../../assets/images/statics/homepage2.png";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Routes } from "router/routes";
import { Col, Slider } from "antd";
import { Checkbox } from "antd";
import useLocalization from "assets/lang";
const HomeComponent = () => {
  const {
    slider,
    loanBtn,
    sliderWrapper,
    finInputTxt,
    sliderInputTxt,
    header,
    headerTitle,
    headerText,
    headerBtns,
    productBtn,
    loanMainBtn,
    aboutBtn,
    aboutusWrapper,
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
    productWrapper,
    loanWrapper,
    finInput,
    phoneInput,
    paymentTxt,
    payment,
    line,
    loanInputTxt,
    loanInputheader,
    applyLoanText,
  } = useHomeStyles();

  const [price, setPrice] = useState(2500);
  const [month, setmonth] = useState(1);
  const [percentage, setpercentage] = useState(10);
  const [monthlyPayment, setmonthlyPayment] = useState<number | string>(0);

  const calculatePayment = () => {
    const monthlyInterestRate = percentage / 100 / 12;
    const totalPayments = month;
    const monthlyPayment =
      (price *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    setmonthlyPayment(monthlyPayment.toFixed(2));
  };

  const onPriceChange = (newValue: number) => {
    setPrice(newValue);
    calculatePayment();
  };
  const onMonthChange = (newValue: number) => {
    setmonth(newValue);
    calculatePayment();
  };
  const onPercentageChange = (newValue: number) => {
    setpercentage(newValue);
    calculatePayment();
  };

  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();
  const translate = useLocalization();

  return (
    <div style={{ paddingBottom: 100 }}>
      <div className={`${header} row`}>
        <div className={`${headerTitle} col-6`}>
          {translate("header_title")}
        </div>
        <div className={`${headerText} col-6`}>
          {translate("header_text")}
          <div className={headerBtns}>
            <button
              className={productBtn}
              onClick={() => navigate(Routes.products)}
            >
              <p className={btnText}>{translate("products")}</p> <ArrowRight />
            </button>
            <button className={aboutBtn} onClick={() => handleClick()}>
              <p className={btnText}>{translate("about")}</p>

              <ArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`${mainImgWrapper} col-12`}>
          <img src={homepage1} className={mainImg} alt="" />
          <p className={mainImgText}>{translate("mainImgText")}</p>
        </div>
      </div>
      <div className={`${mainImgWrapper} row`} style={{ marginTop: 80 }}>
        <div
          className={`${aboutusWrapper} col-6`}
          style={{ padding: 0 }}
          ref={ref}
        >
          <p className={aboutUsTxt}>{translate("aboutUs")}</p>
          <p className={aboutUsSecondaryTxt}>
            {translate("aboutUsSecondaryTxt")}
          </p>
          <p className={mainTxt}>{translate("mainTxt")}</p>
          <div className={learnMoreWrapper}>
            <p className={learnMore}>{translate("learnMore")}</p>
            <div className={line}></div>
          </div>
        </div>
        <div className={`${aboutusWrapper} col-6`} style={{ padding: 0 }}>
          <div>
            <img src={homepage2} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{}}>
          <p className={productsTxt}>{translate("products")}</p>
        </div>
      </div>
      <div className="row">
        <div
          className={`${productWrapper} col-6`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className={productsTitle}>{translate("loan")}</p>
        </div>
        <div
          className={`${productWrapper} col-6`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className={productsContent}>{translate("loanContent")}</p>
        </div>
      </div>
      <div className="row" style={{ marginTop: 174, alignItems: "center" }}>
        <div className={`${loanWrapper} col-6`}>
          <p className={applyLoanText}>{translate("applyLoan")}</p>
          <p
            className={productsTitle}
            style={{ whiteSpace: "pre-wrap", paddingRight: 10 }}
          >
            {translate("loanTitle")}
          </p>
          <p className={productsContent} style={{ marginTop: 8 }}>
            {translate("loanmainContent")}
          </p>
        </div>
        <div className={`${loanWrapper} col-6`}>
          <div className={`${sliderWrapper} row`}>
            <div className={`${slider} col-4`}>
              <p style={{ color: "#404D43", fontSize: 16, fontWeight: "500" }}>
                {translate("loanAmount")}
              </p>

              <div className={loanInputTxt}>
                <p style={{ fontSize: 16, fontWeight: "400" }}>{price}</p>
                <p style={{ paddingLeft: 50, fontSize: 16, fontWeight: "500" }}>
                  {translate("azn")}
                </p>
              </div>

              <div style={{}}>
                <Col span={12}>
                  <Slider
                    style={{ width: "140px" }}
                    min={1}
                    max={10000}
                    onChange={onPriceChange}
                    value={typeof price === "number" ? price : 0}
                  />
                </Col>
              </div>
            </div>
            <div className={`${slider} col-4`}>
              <p className={sliderInputTxt}>{translate("loanTime")}</p>

              <div className={loanInputTxt}>
                <p style={{ fontSize: 16, fontWeight: "400" }}>{month}</p>
                <p style={{ paddingLeft: 50, fontSize: 16, fontWeight: "500" }}>
                  {translate("month")}
                </p>
              </div>

              <div style={{}}>
                <Col span={12}>
                  <Slider
                    style={{ width: "140px" }}
                    min={1}
                    max={12}
                    onChange={onMonthChange}
                    value={typeof month === "number" ? month : 0}
                  />
                </Col>
              </div>
            </div>
            <div className={`${slider} col-4`}>
              <p className={loanInputheader}>{translate("rate")}</p>

              <div className={loanInputTxt}>
                <p style={{ fontSize: 16, fontWeight: "400" }}>{percentage}</p>
                <p style={{ paddingLeft: 50, fontSize: 16, fontWeight: "500" }}>
                  %
                </p>
              </div>

              <div style={{}}>
                <Col span={12}>
                  <Slider
                    style={{ width: "140px" }}
                    min={1}
                    max={100}
                    onChange={onPercentageChange}
                    value={typeof percentage === "number" ? percentage : 0}
                  />
                </Col>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 54 }}>
            <p className={payment}>{translate("payment")}</p>
            <p className={paymentTxt}>{monthlyPayment}M</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 40,
              }}
            >
              <div style={{}}>
                <p className={finInputTxt}>{translate("fin")}</p>
                <input type="text" className={finInput} />
              </div>
              <div>
                <p className={finInputTxt}>{translate("phone")}</p>
                <input
                  type="text"
                  placeholder="+994 00 000 00 00"
                  className={phoneInput}
                />
              </div>
            </div>
            <div className={loanBtn}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                <p style={{ marginLeft: 11 }}>{translate("agreement")}</p>
              </div>
              <button
                className={loanMainBtn}
                onClick={() => navigate(Routes.products)}
              >
                <p className={btnText}>{translate("submit")}</p> <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
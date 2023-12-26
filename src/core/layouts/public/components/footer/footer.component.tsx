import { useFooterStyles } from "./footer.style";
import useLocalization from "assets/lang";
import { NavLink } from "react-router-dom";
import { Routes } from "router/routes";
import niceartLogo from "assets/images/statics/niceart.svg";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterComponent = () => {
  const classes = useFooterStyles();
  const date = new Date().getFullYear();
  const translate = useLocalization();

  return (
    <div className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="row justify-between">
              <div className="col-lg-3 col-md-4">
                <div className={classes.logoImg}>
                  <NavLink to={Routes.home}>
                    <img src={niceartLogo} alt="logo" />
                  </NavLink>
                </div>
                <p className={classes.footerTxt}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                </p>
                <ul className={classes.footerSocial}>
                  <li className="ftco-animate">
                    <NavLink
                      to="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Twitter"
                    >
                      <FaFacebookF />
                    </NavLink>
                  </li>
                  <li className="ftco-animate">
                    <NavLink
                      to="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                    >
                      <FaTwitter />
                    </NavLink>
                  </li>
                  <li className="ftco-animate">
                    <NavLink
                      to="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                    >
                      <PiInstagramLogoFill />
                    </NavLink>
                  </li>
                  <li className="ftco-animate">
                    <NavLink
                      to="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                    >
                      <FaLinkedinIn />
                    </NavLink>
                  </li>
                  <li className="ftco-animate">
                    <NavLink
                      to="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                    >
                      <FaYoutube />
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-7 justify-end">
                <div className="row justify-end">
                  <div className="col-md-12 justify-end">
                    <div className="row justify-end">
                      <div className="col-5 justify-end">
                        <h2 className={classes.footHeading}>Site</h2>
                        <ul className="list-unstyled">
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              Home Page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              About us
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              Products
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              Partners
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              Contact Us
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-7 justify-end">
                        <h2 className={classes.footHeading}>Contacts US</h2>
                        <ul className="list-unstyled">
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              <MdOutlineEmail />
                              <span className="pl-6">contact@company.com</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              <MdOutlineLocalPhone />
                              <span className="pl-6">(414) 687 - 5892</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              <CiLocationOn />
                              <span className="pl-6"> Location of company</span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`row align-center ${classes.marginToprights}`}>
            <div className={`${classes.copyRight}col-12 col-md-6`}>
              {translate("copyright")} © {date} {translate("rights")}.
            </div>
            <div
              className={`${classes.copyRight} col-12 col-md-6 text-md-right text-left`}
            >
              <span className="">{translate("organisation")} |</span>
              <NavLink to={Routes.about} className={classes.rightReserv}>
                {translate("terms")}
              </NavLink>
              <span className="">|</span>
              <NavLink to={Routes.about} className={`${classes.rightReserv}`}>
                {translate("privacy")}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;

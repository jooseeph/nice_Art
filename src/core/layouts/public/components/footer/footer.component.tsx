import { environment } from "core/configs/app.config";
import { useFooterStyles } from "./footer.style";
import useLocalization from "assets/lang";
import { NavLink } from "react-router-dom";
import { Routes } from "router/routes";
import niceartLogo from "assets/images/statics/niceart.svg";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const FooterComponent = () => {
  const classes = useFooterStyles();
  const projectName = environment.applicationName;
  const date = new Date().getFullYear();
  const translate = useLocalization();

  return (
    <div className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="row">
              <div className="col-md-4">
                <div className={classes.logoImg}>
                  <NavLink to={Routes.home}>
                    <img src={niceartLogo} alt="logo" />
                  </NavLink>
                </div>
                <p className={classes.footerTxt}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                </p>
                <ul className="ftco-footer-social p-0">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Twitter"
                    >
                      <span className="ion-logo-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                    >
                      <span className="ion-logo-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                    >
                      <span className="ion-logo-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 justify-end">
                <div className="row justify-end">
                  <div className="col-md-12 justify-end">
                    <div className="row justify-end">
                      <div className="col-md-4 justify-end">
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
                      <div className="col-md-4 justify-end">
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
        <div className={`row align-center ${classes.marginToprights}`}>
          <div className={`${classes.copyRight} col-6`}>
            {translate("copyright")} © {date} {projectName}{" "}
            {translate("rights")}.
          </div>
          <div className={`${classes.copyRight} col-6 text-right`}>
            <span className="">{translate("organisation")} |</span>
            <NavLink to={Routes.about} className={classes.rightReserv}>
              {translate("terms")}
            </NavLink>
            <span className="">|</span>
            <NavLink to={Routes.about} className={classes.rightReserv}>
              {translate("privacy")}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;

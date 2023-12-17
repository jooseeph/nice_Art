import niceartLogo from "assets/images/statics/niceart.svg";
import { NavLink } from "react-router-dom";
import { Routes } from "router/routes";
import NavMenuComponent from "../nav-menu/nav-menu.component";
import { useHeaderNavbarStyles } from "./header-navbar.style";

const HeaderNavbarComponent = () => {
  const classes = useHeaderNavbarStyles();
  return (
    <div className={`${classes.navbar}`}>
      <div className="row align-center">
        <div className="col-2">
          <div className={classes.logoImg}>
            <NavLink to={Routes.home}>
              <img src={niceartLogo} alt="logo" />
            </NavLink>
          </div>
        </div>
        <div className="col-10">
          <NavMenuComponent />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbarComponent;




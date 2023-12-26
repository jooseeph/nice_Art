import HeaderNavbarComponent from "../header-navbar/header-navbar.component";
import "./header.style";
import { useHeaderStyles } from "./header.style";

const HeaderComponent = () => {
  const classes = useHeaderStyles();

  return (
    <div className={classes.header}>
      <HeaderNavbarComponent />
    </div>
  );
};

export default HeaderComponent;

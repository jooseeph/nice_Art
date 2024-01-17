import HeaderComponent from "./components/header/header.component";
import { Outlet } from "react-router-dom";
import FooterComponent from "./components/footer/footer.component";
import { usePublicLayoutStyles } from "./public.style";

const PublicComponent = () => {
  const classes = usePublicLayoutStyles();


  return (
    <div className={classes.public}>
      <HeaderComponent />
      <div className={classes.content}>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default PublicComponent;

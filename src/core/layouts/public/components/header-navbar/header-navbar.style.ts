import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  navbar: {
    width: "100%",
    padding: rem(40) + " " + rem(0),
    "@media (max-width: 768px)": { padding: rem(15) + " " + rem(0), },
  },
  logoImg: {
    display: "flex",
    alignItems: "center",
    "& img": {
      display: "block",
      width: rem(148),
      height: rem(40),
    },
  },
};

export const useHeaderNavbarStyles = createUseStyles(styles);




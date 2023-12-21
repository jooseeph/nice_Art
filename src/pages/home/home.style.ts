import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import sizes from "assets/styles/abstracts/sizes";
import { createUseStyles } from "react-jss";

const styles = {
  header: {
    marginTopn: rem(20),
  },
  headerTitle: {
    color: colors.navActiveText,
    fontSize: 72,
    fontWeight: "800",
    fontFamily: "WestTrial Thin",
  },
  headerText: {
    color: colors.navText,
    fontSize: 16,
    fontWeight: "400",
    // alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: fonts.fontBold,
  },
  headerBtns: {
    marginTop: rem(25),
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  productBtn: {
    padding: rem(12) + " " + rem(24),
    borderRadius: rem(8),
    background: "#3e6f00",
    color: "white",
    borderColor: "none",
    cursor: "pointer",
    border: "none",
    fontSize: 16,
    fontWeight: "400",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginRight: 8,
  },
  aboutBtn: {
    padding: rem(12) + " " + rem(24),
    marginLeft: rem(24),
    borderRadius: rem(8),
    color: "#3e6f00",
    cursor: "pointer",
    // border: "none",
    fontSize: 16,
    fontWeight: "400",
    borderColor: "#3e6f00",
    background: "white",
    borderWidth: 1,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  btnText: {
    marginRight: 8,
  },
  mainImgWrapper: {
    marginTop: 53,
    padding: rem(0) + " " + rem(100),
  },
  mainImg: {
    width: "100%",
  },
  mainImgText: {
    color: "#414D44",
    fontSize: sizes.base,
    fontFamily: "West Trial",
    fontWeight: "400",
    marginTop: rem(32),
  },
};

export const useHomeStyles = createUseStyles(styles);

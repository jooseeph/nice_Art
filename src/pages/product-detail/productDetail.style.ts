import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const style = {
  productDetailSec: { zIndex: "999"},
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: rem(659),
    backgroundColor: "#FAFFF3",
    zIndex: "-1",
    "@media (max-width: 768px)": {
      height: rem(520),
    },
  },
  productDetail: {
    padding: `${rem(93) + " " + rem(0) + " " + rem(125) + " " + rem(0)}`,
    "@media (max-width: 768px)": {
      padding: `${rem(55) + " " + rem(0) + " " + rem(50) + " " + rem(0)}`,
    },
  },
  creditAbout: {
    marginBottom: rem(44),
    "@media (max-width: 768px)": { marginBottom: rem(20) },
  },
  title: {
    fontFamily: fonts.fontBold,
    fontSize: rem(60),
    fontWeight: "800",
    lineHeight: rem(79),
    letterSpacing: rem(0),
    textAlign: "left",
    color: colors.titleGreen,
    padding: 0,
    margin: 0,
    "@media (max-width: 768px)": {
      fontSize: rem(36),
      fontWeight: "800",
      lineHeight: rem(48),
      marginBottom: rem(37),
    },
  },
  productImg: {
    display: "flex",
    justifyContent: "end",
    "@media (max-width: 768px)": {
      justifyContent: "center!important",
      width: rem(358),
      height: rem(260),
      paddingLeft: "0!important",
      padding: `${rem(37) + " " + rem(0) + " " + rem(50) + " " + rem(0)}`,
      "& img": {
      width: "100%",
    },
    },
  },
  credit_about: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: "800",
    lineHeight: rem(21),
    letterSpacing: 0,
    textAlign: "left",
    color: colors.titleGreen,
    display: "inline-block",
    padding: 0,
    marginTop: rem(160),
    "@media (max-width: 768px)": { marginTop: rem(60) },
  },
  credit_about_title: {
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: "800",
    lineHeight: rem(58),
    letterSpacing: 0,
    textAlign: "left",
    color: colors.titleBlack,
    "@media (max-width: 768px)": {
      fontSize: rem(28),
      fontWeight: "800",
      lineHeight: rem(37),
    },
  },
  credit_about_description: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: "400",
    lineHeight: rem(27),
    letterSpacing: 0,
    textAlign: "left",
    "@media (max-width: 768px)": {
      fontSize: rem(14),
      lineHeight: rem(19),
    },
  },
};

export const useProductDetailStyles = createUseStyles(style);

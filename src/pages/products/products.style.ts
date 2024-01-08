import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  products: { marginTop: rem(60) },
  productDesc: {
  },
  title: {
    fontFamily: fonts.fontMedium,
    fontSize: rem(60),
    fontWeight: "800",
    lineHeight: rem(79),
    letterSpacing: rem(0),
    textAlign: "left",
    color: colors.titleGreen,
    paddingRight: rem(30),
    margin: 0,
    "@media (max-width:768px)": {
      fontSize: rem(36),
      fontWeight: "800",
      lineHeight: rem(48),
      letterSpacing: rem(0),
      marginBottom: rem(24),
    },
  },
  descripTitle: {
    fontFamily: fonts.fontBold,
    fontSize: rem(44),
    fontWeight: "800",
    lineHeight: rem(58),
    letterSpacing: rem(0),
    textAlign: "left",
    color: colors.titleBlack,
    marginBottom: rem(10),
    "@media (max-width:768px)": {
      fontSize: rem(28),
      fontWeight: "800",
      lineHeight: rem(37),
      letterSpacing: rem(0),
      textAlign: "left",
      marginBottom: rem(4),
    },
  },
  description: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: "400",
    lineHeight: rem(22),
    letterSpacing: rem(0),
    textAlign: "left",
  },
};

export const useProductsStyles = createUseStyles(styles);

import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  products: { marginTop: rem(60) },
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
  },
  descripTitleitle: {
    fontFamily: fonts.fontBold,
    fontSize: rem(44),
    fontWeight: "800",
    lineHeight: rem(58),
    letterSpacing: rem(0),
    textAlign: "left",
    color: colors.titleBlack,
    marginBottom: rem(10),
  },
  description: {
    fontFamily: fonts.fontBold,
    fontSize: rem(16),
    fontWeight: "400",
    lineHeight: rem(22),
    letterSpacing: rem(0),
    textAlign: "left",
  },
};

export const useProductsStyles = createUseStyles(styles);

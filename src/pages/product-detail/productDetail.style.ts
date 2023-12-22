import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const style = {
  productDetailSec: {zIndex:'999'},
  overlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: rem(575),
  backgroundColor: '#FAFFF3',
  zIndex:'-1', /* Yeşil renk ve yarı saydam (transparan) */
},
  productDetail: {
    padding: `${rem(93) + " " + rem(0) + " " + rem(125) + " " + rem(0)}`,
  },
  creditAbout: { marginBottom: rem(44) },
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
  productImg: {
    display: "flex",
    justifyContent: "end",
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
  },
  credit_about_title: {
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: "800",
    lineHeight: rem(58),
    letterSpacing: 0,
    textAlign: "left",
    color: colors.titleBlack,
  },
  credit_about_description: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: "400",
    lineHeight: rem(27),
    letterSpacing: 0,
    textAlign: "left",
  },
};

export const useProductDetailStyles = createUseStyles(style);

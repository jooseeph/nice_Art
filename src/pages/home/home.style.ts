import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { breakpoint } from "assets/styles/abstracts/mixins";
import sizes from "assets/styles/abstracts/sizes";
import { createUseStyles } from "react-jss";

const styles = {
  header: {
    [breakpoint(1200)]: {
      display: 'block',
    },
  },
  headerTitle: {
    [breakpoint(1200)]: {
      fontSize: 36,
      minWidth: '100%',
      paddingLeft: 20,
      paddingRight: 50,
    },
    color: colors.navActiveText,
    fontSize: 72,
    fontWeight: '800',
    fontFamily: fonts.font,
  },
  headerText: {
    color: colors.navText,
    fontSize: 16,
    fontWeight: '400',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: fonts.fontBold,
    [breakpoint(1200)]: {
      fontSize: 16,
      minWidth: '100%',
      paddingLeft: 20,
      paddingRight: 50,
      marginTop: 13,
    },
  },
  aboutusWrapper: {
    [breakpoint(1200)]: {
      minWidth: '100%',
    },
  },
  headerBtns: {
    marginTop: rem(25),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productBtn: {
    padding: rem(12) + ' ' + rem(24),
    borderRadius: rem(8),
    background: '#3e6f00',
    color: 'white',
    borderColor: 'none',
    cursor: 'pointer',
    border: 'none',
    fontSize: 16,
    fontWeight: '400',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginRight: 8,
  },
  aboutBtn: {
    padding: rem(12) + ' ' + rem(24),
    marginLeft: rem(24),
    borderRadius: rem(8),
    color: colors.abutbtnColor,
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: '400',
    borderColor: colors.abutbtnColor,
    background: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    [breakpoint(1200)]: {
      padding: rem(6) + ' ' + rem(24),
    },
  },
  btnText: {
    marginRight: 8,
  },
  mainImgWrapper: {
    marginTop: 53,
    padding: rem(0) + ' ' + rem(100),
    [breakpoint(1200)]: {
      padding: rem(20),
      display: 'block',
    },
  },
  mainImg: {
    width: '100%',
  },
  mainImgText: {
    color: colors.mainImgTextColor,
    fontSize: sizes.base,
    fontFamily: fonts.font,
    fontWeight: '400',
    marginTop: rem(32),
  },
  mainTxt: {
    color: colors.mainImgTextColor,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  aboutUsTxt: {
    color: colors.aboutusTxt,
    fontSize: 16,
    fontWeight: '800',
    [breakpoint(1200)]: {
      fontSize: 16,
      minWidth: '100%',
    },
  },
  aboutUsSecondaryTxt: {
    color: colors.mainImgTextColor,
    fontSize: 44,
    fontWeight: '800',
    marginTop: 8,
    wordWrap: 'break-word',
    [breakpoint(1200)]: {
      fontSize: 28,
      minWidth: '100%',
    },
  },
  learnMore: {
    color: colors.mainImgTextColor,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 50,
  },
  learnMoreWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 22,
  },
  productsTxt: {
    color: colors.abutbtnColor,
    fontSize: 16,
    fontFamily: fonts.font,
    fontWeight: '800',
    paddingLeft: rem(0),
  },
  applyLoanText: {
    color: colors.abutbtnColor,
    fontSize: 16,
    fontFamily: fonts.font,
    fontWeight: '800',
    paddingLeft: rem(17),
  },
  productsTitle: {
    color: colors.mainImgTextColor,
    fontSize: 44,
    fontFamily: fonts.font,
    fontWeight: '800',
    wordWrap: 'break-word',
    whiteSpace: 'pre',
    [breakpoint(1200)]: {
      fontSize: 28,
      paddingLeft: rem(15),
      marginTop: 15,
    },
  },
  productsContent: {
    color: colors.mainImgTextColor,
    fontSize: 16,
    fontFamily: fonts.font,
    fontWeight: '400',
    alignItems: 'center',
    [breakpoint(1200)]: {
      fontSize: 14,
      padding: rem(15),
    },
  },
  productWrapper: {
    [breakpoint(1200)]: {
      minWidth: '100%',
    },
  },
  loanWrapper: {
    [breakpoint(1200)]: {
      minWidth: '100%',
    },
  },
  slider: {
    [breakpoint(1200)]: {
      minWidth: '90%',
      padding: rem(10) + " " + rem(10) + " " + rem(0) + " " + rem(40),
    },
  },
  finInput: {
    marginTop: 8,
    height: 51,
    border: '1px #F1F1F1 solid',
    borderRadius: 4,
    paddingLeft: 32,
    paddingRight: 32,
    [breakpoint(1200)]: {
      padding: 0,
    },
  },
  finInputTxt: {
    color: colors.finInputColor,
    fontSize: 14,
    fontWeight: '400',
    [breakpoint(1200)]: {
      padding: 10,
    },
  },
  phoneInput: {
    marginTop: 8,
    height: 51,
    border: 'none',
    borderRadius: 4,
    paddingLeft: 32,
    paddingRight: 32,
    [breakpoint(1200)]: {
      padding: 0,
    },
  },
  sliderWrapper: {
    [breakpoint(1200)]: {
      padding: 0,
      maxWidth: '100%',
    },
  },
  sliderInputTxt: {
    color: colors.finInputColor,
    fontSize: 16,
    fontWeight: '500',
    [breakpoint(1200)]: {
      padding: 0,
    },
  },
  loanBtn: {
    display: 'flex',
    alignItems: 'center',
    [breakpoint(1200)]: {
      display: 'block',
      padding: rem(15),
    },
  },
  loanMainBtn: {
    padding: rem(12) + " " + rem(24),
    borderRadius: rem(8),
    background: '#3e6f00',
    color: 'white',
    borderColor: 'none',
    cursor: 'pointer',
    border: 'none',
    fontSize: 16,
    fontWeight: '400',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginRight: 8,
    [breakpoint(1200)]: {
      width: '100%',
      marginTop: 8,
    },
  },
  payment: {
    color: colors.finInputColor,
    fontSize: 12,
    fontWeight: '400',
    [breakpoint(1200)]: {
      padding: rem(15),
    },
  },
  paymentTxt: {
    color: colors.abutbtnColor,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 4,
    [breakpoint(1200)]: {
      padding: rem(15),
    },
  },
  line: {
    height: 4,
    width: 92,
    background: '#3E6F00',
  },
  loanInputTxt: {
    display: 'flex',
    border: '1px solid #F1F1F1',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  loanInputheader: {
    color: colors.finInputColor,
    fontSize: 16,
    fontWeight: '500',
  },
};

export const useHomeStyles = createUseStyles(styles);

import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  productItem: {
    position: 'relative',
    background: colors.backgroundProductI,
    padding: `${rem(40) + ' ' + rem(0) + ' ' + rem(40) + ' ' + rem(40)}`,
    marginTop: rem(40),
    '&:first-child': {
      marginTop: rem(60),
    },
    '&:last-child': {
      marginBottom: rem(200) + '!important',
    },
    '@media (max-width: 768px)': {
      '&:last-child': {
        marginBottom: rem(90) + '!important',
      },
    },
    '@media (max-width:1200px)': {
      padding: `${rem(40) + ' ' + rem(0) + ' ' + rem(40) + ' ' + rem(40)}`,
    },
    '@media (max-width:768px)': {
      padding: `${rem(16) + ' ' + rem(0) + ' ' + rem(16) + ' ' + rem(16)}`,
      '&:first-child': {
        marginTop: rem(38),
      },
    },
  },
  productImgMobile: {
    '@media (max-width: 768px)': {
      display: 'block!important',
      width: rem(145),
      height: rem(105),
      position: 'absolute',
      right: 0,
      bottom: 0,
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
  },
  productItemTitle: {
    fontFamily: fonts.fontBold,
    fontSize: rem(24),
    fontWeight: '800',
    lineHeight: rem(32),
    letterSpacing: rem(0),
    textAlign: 'left',
    color: colors.titleGreen,
  },
  productDescription: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    letterSpacing: rem(0),
    textAlign: 'left',
    color: colors.titleBlack,
    marginTop: `${rem(6)}!important`,
    marginBottom: rem(40),
  },
  productImg: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    '@media (max-width: 768px)': {
      display: 'none',
    },
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  creditDetail: {
    marginTop: rem(40),
    '& label': {
      display: 'block',
      marginBottom: rem(7),
      fontFamily: fonts.font,
      fontSize: rem(16),
      fontWeight: '400',
      lineHeight: rem(22),
      letterSpacing: rem(0),
      textAlign: 'left',
      color: colors.titleBlack,
    },
    '& span': {
      display: 'block',
      fontFamily: fonts.font,
      fontSize: rem(16),
      fontWeight: '400',
      lineHeight: rem(22),
      letterSpacing: rem(0),
      textAlign: 'left',
      color: colors.titleBlack,
    },
  },
  productDetailBtn: {
    '& a': {
      textDecoration: 'none',
    },
  },
  detailBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${rem(12) + ' ' + rem(24)}`,
    border: 'none',
    borderRadius: rem(8),
    background: colors.titleGreen,
    color: colors.light,
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    letterSpacing: 0,
    textAlign: 'left',
    cursor: 'pointer',
  },
  mobileNone: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  rightArrow: {
    width: rem(24),
    height: rem(24),
    padding: rem(6),
  },
};

export const useProductItemStyles = createUseStyles(styles);

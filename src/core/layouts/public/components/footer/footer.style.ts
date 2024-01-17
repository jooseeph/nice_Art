import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  footer: {
    padding: rem(120) + ' ' + rem(0) + ' ' + rem(24) + ' ' + rem(0),
    backgroundColor: colors.footBackground,
    fontFamily: fonts.font,
    '& li:last-child $footMenuItem': { marginBottom: rem(0) },
    '@media(max-width:768px)': {
      padding: rem(16) + ' ' + rem(0),
    },
  },
  marginToprights: {
    marginTop: rem(132),
    '@media(max-width:768px)': {
      marginTop: rem(49),
    },
  },
  footer08: {
    padding: 0,
    overflow: 'hidden',
    background: '#f1f6f5',
    '& a': {
      color: '#12cc94',
    },
    '& p': {
      color: 'rgba(0, 0, 0, 0.3)',
    },
    '& .footer-heading': {
      fontSize: '18px',
      marginBottom: '30px',
      '@media (min-width: 768px)': {
        '&.footer-heading-white': {
          color: '#fff',
        },
      },
    },
    '& ul.list-unstyled li a': {
      color: 'rgba(0, 0, 0, 0.3)',
    },
    '& .contact-form': {
      width: '100%',
      '& .form-control': {
        height: '50px',
        background: '#fff',
        color: 'rgba(0, 0, 0, 0.3)',
        fontSize: '14px',
        borderRadius: '5px',
        boxShadow: 'none',
        border: 'none',
        '&::-webkit-input-placeholder': {
          color: 'rgba(0, 0, 0, 0.3) !important',
        },
        '&::-moz-placeholder': {
          color: 'rgba(0, 0, 0, 0.3) !important',
        },
        '&:-ms-input-placeholder': {
          color: 'rgba(0, 0, 0, 0.3) !important',
        },
        '&:-moz-placeholder': {
          color: 'rgba(0, 0, 0, 0.3) !important',
        },
        '&:focus': {
          outline: 'none !important',
          boxShadow: 'none',
        },
        '&:focus, &:active': {
          outline: 'none !important',
          boxShadow: 'none',
        },
      },
      '& .submit': {
        background: '#2f89fc !important',
        color: '#fff',
      },
      '& textarea.form-control': {
        height: 'inherit !important',
      },
    },
    '& .aside-stretch-right': {
      background: '#12cc94',
      '&:after': {
        background: '#12cc94',
      },
      '@media (max-width: 767.98px)': {
        background: 'transparent',
        '&:after': {
          background: 'transparent',
          display: 'none',
        },
      },
    },
  },
  footerSocial: {
    display: 'flex',
    marginTop: rem(24),
    marginBottom: rem(44),
    '& li a': {
      color: colors.sosialIcon,
      marginRight: rem(22),
      fontSize: rem(18),
    },
  },
  footHeading: {
    fontFamily: fonts.fontBold,
    fontSize: rem(20),
    marginBottom: rem(42),
    fontWeight: '700',
    lineHeight: rem(22),
    color: colors.navText,
  },
  footerTxt: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    color: colors.footText,
  },
  copyRight: {
    fontFamily: fonts.font,
    color: colors.copyRightTxt,
    fontSize: rem(18),
    lineHeight: rem(30),
    fontWeight: '400',
    '@media (max-width: 767.98px)': {
      fontSize: rem(17),
    },
  },
  footMenuItem: {
    fontFamily: fonts.font,
    textDecoration: 'none',
    fontWeight: '400',
    lineHeight: rem(20),
    fontSize: rem(18),
    marginBottom: rem(18),
    color: colors.titleBlack,
  },
  rightReserv: {
    fontFamily: fonts.font,
    textDecoration: 'none',
    borderBottom: `1px solid ${colors.navActiveText} `,
    fontWeight: '400',
    fontSize: rem(18),
    color: colors.navActiveText,
    lineHeight: rem(30),
    '@media (max-width:768px)': {
      fontSize: rem(16),
    },
  },
  verticalLine: {
    margin: rem(0) + ' ' + rem(10),
  },
  logoImg: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: rem(26),
    '& img': {
      display: 'block',
      width: rem(148),
      height: rem(40),
    },
  },
};

export const useFooterStyles = createUseStyles(styles);

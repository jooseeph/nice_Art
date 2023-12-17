import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  footer: {
    padding: rem(120) + " " + rem(0) + " " + rem(24) + " " + rem(0),
    backgroundColor: colors.footBackground,
    "& li:last-child $footMenuItem": { marginBottom: rem(0) },
  },
  marginToprights: {
    marginTop: rem(132),
  },
  footer08: {
    padding: 0,
    overflow: "hidden",
    background: "#f1f6f5",
    "& a": {
      color: "#12cc94",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.3)",
    },
    "& .footer-heading": {
      fontSize: "18px",
      marginBottom: "30px",
      "@media (min-width: 768px)": {
        "&.footer-heading-white": {
          color: "#fff",
        },
      },
    },
    "& ul.list-unstyled li a": {
      color: "rgba(0, 0, 0, 0.3)",
    },
    "& .contact-form": {
      width: "100%",
      "& .form-control": {
        height: "50px",
        background: "#fff",
        color: "rgba(0, 0, 0, 0.3)",
        fontSize: "14px",
        borderRadius: "5px",
        boxShadow: "none",
        border: "none",
        "&::-webkit-input-placeholder": {
          color: "rgba(0, 0, 0, 0.3) !important",
        },
        "&::-moz-placeholder": {
          color: "rgba(0, 0, 0, 0.3) !important",
        },
        "&:-ms-input-placeholder": {
          color: "rgba(0, 0, 0, 0.3) !important",
        },
        "&:-moz-placeholder": {
          color: "rgba(0, 0, 0, 0.3) !important",
        },
        "&:focus": {
          outline: "none !important",
          boxShadow: "none",
        },
        "&:focus, &:active": {
          outline: "none !important",
          boxShadow: "none",
        },
      },
      "& .submit": {
        background: "#2f89fc !important",
        color: "#fff",
      },
      "& textarea.form-control": {
        height: "inherit !important",
      },
    },
    "& .aside-stretch-right": {
      background: "#12cc94",
      "&:after": {
        background: "#12cc94",
      },
      "@media (max-width: 767.98px)": {
        background: "transparent",
        "&:after": {
          background: "transparent",
          display: "none",
        },
      },
    },
  },
  footHeading: {
    fontFamily: fonts.fontBold,
    fontSize: rem(20),
    marginBottom: rem(42),
    // fontWeight: "700",
    lineHeight: rem(22),
  },
  footerTxt: {
    // fontFamily: West Trial,
    fontSize: rem(16),
    fontWeight: "400",
    lineHeight: rem(24),
    textAlign: "left",
    color: colors.footText,
  },
  copyRight: {
    color: colors.copyRightTxt,
    fontSize: rem(18),
    lineHeight: rem(30),
    fontWeight: '400',
  },
  footMenuItem: {
    textDecoration: "none",
    fontWeight: "400",
    lineHeight: rem(20),
    fontSize: rem(18),
    marginBottom: rem(18),
    color: colors.footText,
  },
  rightReserv: {
    textDecoration: 'none',
    borderBottom: `1px solid ${colors.navActiveText} `,
    fontWeight: '400',
    fontSize: rem(18),
    color: colors.navActiveText,
    lineHeight: rem(30),
    marginLeft: rem(6),
    marginRight: rem(6),
  },
  logoImg: {
    display: "flex",
    alignItems: "center",
    marginBottom: rem(26),
    "& img": {
      display: "block",
      width: rem(148),
      height: rem(40),
    },
  },
};

export const useFooterStyles = createUseStyles(styles);

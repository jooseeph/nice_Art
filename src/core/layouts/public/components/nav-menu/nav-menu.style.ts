import colors from "assets/styles/abstracts/color";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  navMenu: {
    width: '100%',
    textAlign: 'end',
    '& ul': { display: 'flex', justifyContent: 'space-end' },
    '@media (max-width: 768px)': {
      navMenu: {
        width: '100%',
      },
      '& ul': {
        width: '100%',
        flexDirection: 'column',
        textAlign: 'start',
        background: `${colors.light}`,
        borderTop: `1px solid ${colors.navActiveText}`,
        position: 'fixed',
        padding: rem(10) + ' ' + rem(25),
        top: rem(70),
        right: '-100%',
        transition: '0.3s ease-in-out',
      },
      '& ul li': {
        marginBottom: rem(10),
      },
    },
  },
  active: {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'row',
  },
  hiden: {
    left: 0,
  },

  mobileMenuIcon: {
    color: colors.navActiveText,
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      cursor: 'pointer',
      '& svg': { width: rem(30), height: rem(30) },
    },
  },
};

export const useNavMenuStyles = createUseStyles(styles);



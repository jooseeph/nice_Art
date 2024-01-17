import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  item: {
    marginRight: rem(40),
    '&:last-child': { marginRight: rem(0) },
  },
  itemText: {
    fontFanily: fonts.font,
    fontSize: rem(16),
    fontWeight: '500',
    color: colors.navText,
    lineHeight: rem(22),
    '&:hover': {
      color: colors.navActiveText,
    },
  },
  link: {
    textDecoration: 'none',
  },
  active: {
    '& $itemText': {
      color: colors.navActiveText,
    },
  },
};

export const useNavMenuItemStyles = createUseStyles(styles);

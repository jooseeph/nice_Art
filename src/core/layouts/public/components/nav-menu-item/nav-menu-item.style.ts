import colors from "assets/styles/abstracts/color";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  item: {
    marginRight: rem(40),
    "&:last-child": { marginRight: rem(0) },
  },
  itemText: {
    fontSize: rem(16),
    fontWeight: "700",
    color: colors.navText,
    lineHeight: rem(22),
    "&:hover": {
      color: colors.navActiveText,
    },
    "&:active": {
      color: colors.navActiveText,
    },
  },
  link: {
    textDecoration: "none",
  },
};

export const useNavMenuItemStyles = createUseStyles(styles);

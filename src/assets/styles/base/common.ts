import fonts from '../abstracts/fonts';
import sizes from '../abstracts/sizes';

const commonStyles = {
  '@global': {
    html: {
      fontSize: sizes.base,
    },
    body: {
      fontFamily: fonts.fontMain,
      margin: 0,
      padding: 0,
    },
  },
};

export default commonStyles;

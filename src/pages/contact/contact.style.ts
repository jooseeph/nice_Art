/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';

const styles = {
  overlay: {
    width: '100%',
    height: rem(552),
    position: 'absolute',
    background: colors.contactBackground,
    left: 0,
    zIndex: '-1',
  },
  maps: {
    position: 'absolute',
    width: '100%',
    height: rem(440),
    left: 0,
  },
  left: {
    '& h1 ': {
      color: colors.titleBlack,
      fontSize: rem(32),
      fontStyle: 'normal',
      fontWeight: 800,
      margin: '20px 0px',
    },
    '& p ': {
      fontSize: rem(22),
      fontWeight: 400,
      lineHeight: rem(35),
    },
  },
  leftTitle: {
    '& h1 ': {
      color: colors.contactTitleActive,
      fontSize: rem(60),
      fontWeight: 800,
      marginBottom: rem(24),
    },
    '& p ': {
      color: colors.contactTitleText,
      fontSize: rem(16),
      fontWeight: 400,
      lineHeight: rem(22),
    },
  },
  submitForm: {
    marginTop: rem(24),
    '& button ': {
      borderRadius: rem(8),
      background: colors.titleGreen,
      color: colors.light,
      border: 'none',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: rem(12),
    },
  },
  submitInput: {
    width: '49%',
  },
  img: {
    position: 'relative',

    '& .top': {
      zIndex: 1,
      position: 'absolute',
      left: rem(101),
       '& img': {
      position: 'absolute',
      marginLeft: rem(0),
    },
    '& img:last-child': {
      marginLeft: rem(279),
      marginTop: rem(76),
    },
    },
    '& .bottom': {
      top: rem(172),
      zIndex: 2,
      position: 'absolute',
      '& img': {
        position: 'absolute',
        marginLeft: rem(0),
      },
      '& img:last-child': {
        marginLeft: rem(275),
        marginTop: rem(96),
      },
    },
  },
};
export const useContactStyle = createUseStyles(styles);

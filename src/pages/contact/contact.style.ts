/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import { breakpoint } from 'assets/styles/abstracts/mixins';

const styles = {
  overlay: {
    width: '100%',
    height: rem(552),
    position: 'absolute',
    background: colors.contactBackground,
    left: 0,
    zIndex: '-1',
    [breakpoint(991)]: {
      height: rem(850),
    },
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
      color:'#333333'
    },
    [breakpoint(991)]: {
      marginBottom: rem(25),
    },
  },
  leftTitle: {
    '& h1 ': {
      color: colors.contactTitleActive,
      fontSize: rem(60),
      fontWeight: 800,
      marginBottom: rem(24),
      [breakpoint(991)]: {
        fontSize:rem(28)
      },

    },
    '& p ': {
      color: colors.contactTitleText,
      fontSize: rem(16),
      fontWeight: 400,
      lineHeight: rem(22),
      [breakpoint(991)]: {
        fontSize:rem(14)
      },
    },
  },
  form: {
    [breakpoint(991)]: {
      marginTop: rem(370),
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
    [breakpoint(991)]: {
      paddingLeft: "15px!important",
      
    },
  },

  submitInput: {
    width: '49%',
    [breakpoint(991)]: {
      width:'100%',
    },
  },
  img: {
    position: 'relative',
    '& .top': {
      zIndex: 1,
      position: 'absolute',
      left: rem(101),
      [breakpoint(991)]: {
        left: rem(60),
      },
      '& img': {
        position: 'absolute',
        marginLeft: rem(0),
        [breakpoint(991)]: {
          width: rem(135),
        },
      },
      '& img:last-child': {
        marginLeft: rem(279),
        marginTop: rem(76),
        [breakpoint(991)]: {
          marginLeft: rem(161),
          marginTop: rem(45),
        },
      },
    },
    '& .bottom': {
      top: rem(172),
      zIndex: 2,
      position: 'absolute',
      [breakpoint(991)]: {
        top: rem(102),
      },
      '& img': {
        position: 'absolute',
        marginLeft: rem(0),
        [breakpoint(991)]: {
          width: rem(135),
        },
      },
      '& img:last-child': {
        marginLeft: rem(275),
        marginTop: rem(96),
        [breakpoint(991)]: {
          marginLeft: rem(161),
          marginTop: rem(57),
        },
      },
    },
  },
};
export const useContactStyle = createUseStyles(styles);

/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  left: {
    '& h1 ': {
      color: '#414D44',
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
      color: '#3E6F00',
      fontSize: rem(60),
      fontWeight: 800,
      marginBottom: rem(24),
    },
    '& p ': {
      color: '#414D44',
      fontSize: rem(16),
      fontWeight: 400,
      lineHeight: rem(22),
    },
  },
  submitForm: {
    marginTop: rem(24),
    '& button ': {
      borderRadius: rem(8),
      background: '#3E6F00',
      color: '#Fff',
      border: 'none',
      padding: '12px 24px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
    },
  },
  form:{
    '&:first-child': { marginLeft: rem(0) },
  }
};
export const useContactStyle = createUseStyles(styles);

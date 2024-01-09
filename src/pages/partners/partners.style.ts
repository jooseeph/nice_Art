import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';

const styles = {
  title: { display: 'flex', marginBottom: rem(60) },

  left: {
    color: '#3E6F00',
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 'normal',
    '@media (max-width: 768px)': {
      fontSize: rem(36),
    },
  },
  right: {
    paddingLeft: rem(100),
    [breakpoint(991)]: {
      paddingLeft: rem(0),
    },
  },
  rightTitle: {
    color: '#414D44',
    fontSize: '44px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 'normal',

    [breakpoint(991)]: {
      display: 'none',
    },
  },

  rightText: {
    color: '#414D44',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
  },
  mainBtn: {
    borderRadius: '8px',
    backgroundColor: '#3E6F00',
    border: 'none',
    padding: '12px 24px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#fff',
    marginTop: rem(24),
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: rem(660),
    display: 'flex',

    padding: rem(32),
    borderRadius: rem(8),
    '& h3': {
      marginTop: rem(10),
      color: '#3E6F00',
      fontSize: rem(8),
      textTransform: 'uppercase',
      padding: '2px 4px',
      borderRadius: rem(4),
      background: '#3e6f0014',
      display: 'inline-block',
    },
  },
};

export const usePartnersStyle = createUseStyles(styles);

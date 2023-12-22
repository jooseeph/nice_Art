import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  container: {},
  title: { display: 'flex', marginBottom: rem(60) },

  left: {
    color: '#3E6F00',
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 'normal',
    '@media (max-width: 768px)': {
      fontSize: rem(36),


    }
  },
  right: {
  },
  rightTitle: {
    color: '#414D44',
    fontSize: '44px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 'normal',
  },

  rightText: {
    color: '#414D44',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px' /* 137.5% */,
  },
  mainBtn: {
    borderRadius: '8px',
    backgroundColor: '#3E6F00',
    padding: '12px 24px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#fff',
    marginTop: rem(24),
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
    width:rem(660), 

    padding: rem(24),
    borderRadius: rem(8),
    textAlign: 'center',
  },
  
};

const stylesCard = {
  card: {
    marginBottom: rem(32),
    // marginRight: rem(32),
    '&:last-child': { marginRight: rem(0) },
    cursor: 'pointer'
  },
  imageAndTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',

    // '& img':{ marginRight: rem(60)},
    '& h2':{margin: 0,},
  },
  
  title: {
    margin: 0, 
  },
  description: {
    marginTop: rem(8),
  },
};
export const partnersStyleCard = createUseStyles(stylesCard);
export const partnersStyle = createUseStyles(styles);

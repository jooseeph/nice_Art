/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
const stylesCard = {
  card: {
    padding: rem(16) + ' ' + rem(0) + ' ' + rem(16) + ' ' + rem(20),
    cursor: 'pointer',
    boxShadow: '0px 0px 4px 0px #3e6f000a',
    borderRadius: rem(16),
    border: '1px solid rgba(62, 111, 0, 0.02)',
  

    '&:last-child': { marginRight: rem(0) },

    '& p': {
      color: '#3E6F00',
      fontSize: rem(8),
      textTransform: 'uppercase',
      padding: '2px 4px',
      borderRadius: rem(4),
      background: '#3e6f0014',
      display: 'inline-block',
    },
  },
  imageAndTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: rem(36),

    '& h2': { marginLeft: 12 },
    '& img': {
      width: rem(32),
    },
  },

  title: {
    margin: 0,
  },
  description: {},
};
export const usePartnersStyleCard = createUseStyles(stylesCard);

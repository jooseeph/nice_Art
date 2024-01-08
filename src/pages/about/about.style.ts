import { rem } from 'assets/styles/abstracts/functions';
import fonts from 'assets/styles/abstracts/fonts';

import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
const minWidth = 770;

const styles = {
    headerTitle: {
        fontSize: rem(55),
        fontFamily: fonts.fontBold,
        color: colors.titleGreen,
        lineHeight: '1.1',
        marginBottom: rem(70),
    },
    headerTopText: {
        fontSize: rem(16),
        fontFamily: fonts.fontBold,
        fontWeight: '600',
        lineHeight: '1.1',
        color: colors.titleGreen,
    },
    headerMidText: {
        width: '90%',
        fontSize: rem(40),
        fontFamily: fonts.fontBold,
        fontWeight: '600',
        lineHeight: '1.1',
        color: colors.titleBlack,
    },
    headerBtmText: {
        fontSize: rem(14.8),
        fontFamily: fonts.fontLight,
        fontWeight: '600',
        lineHeight: '1.4',
        color: colors.titleBlack,
    },
    aboutImage: {
        marginBottom: rem(180),
    },
    navIcon: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(8),
        marginBottom: rem(60),
    },
    navText: {
        fontSize: rem(14),
        fontFamily: fonts.fontLight,
        fontWeight: '400',
        lineHeight: '1.5',
        color: colors.titleGreen,
        gap: rem(8),
    },
    purposeRight: {
        flexDirection: 'column',
        display: 'flex',
        gap: rem(25),
    },
    purposeLeft: {
        maxWidth: '44%',
    },
    topPurposeRight: {
        alignItems: 'center',

        display: 'flex',
        width: '85%',
    },
    fingerprint: {
        margin: rem(40),
    },
    midPurposeRight: {
        alignItems: 'center',

        display: 'flex',
        width: '85%',
        alignSelf: 'end',
    },
    btmPurposeRight: {
        alignItems: 'center',
        display: 'flex',
        width: '85%',
    },
    rightTopText: {
        fontSize: rem(19),
        fontFamily: fonts.fontBold,
        fontWeight: '600',
        lineHeight: '1.1',
        color: colors.titleBlack,
    },
    rightTexts: {
        display: 'grid',
        gap: rem(12),
    },
    strategiesTitle: {
        fontSize: rem(20),
        fontFamily: fonts.fontBold,
        fontWeight: '800',
        lineHeight: '1.1',
        color: colors.titleGreen,
    },
    strategiesParagraph: {
        fontSize: rem(15),
        fontFamily: fonts.fontLight,
        fontWeight: '400',
        lineHeight: rem(24),
        color: colors.titleBlack,
    },
    strategiesBtm: {
        display: 'flex',
        gap: rem(50),
    },
    purpose: {
        display: 'flex',
        alignItems: 'center',
    },
    [`@media screen and (max-width: ${minWidth}px)`]: {
        headerTitle: {
            fontSize: rem(30),
            marginBottom: rem(30),
        },
        headerMidText: {
            fontSize: rem(25),
        },
        headerBtmText: {
            fontSize: rem(13.5),
            marginBottom: rem(24),
        },
        aboutImage: { marginBottom: rem(100) },
        rightTopText: { fontSize: rem(15) },
        purpose: {
            display: 'block',
        },
        fingerprint: {
            margin: rem(15),
        }, strategiesTitle: {
        },
        rightTexts: { paddingLeft: rem(16) },
        purposeLeft: {
            maxWidth: '100%',
        }, topPurposeRight: {
            width: '95%'
        },
        midPurposeRight: {
            alignSelf: 'normal', width: '95%'

        },
        btmPurposeRight: {
            width: '95%'
        }, strategiesBtm: {
            display: 'block',
        },
        navIcon: {
            display: 'none',
        },
    },
};
export const useAboutStyles = createUseStyles(styles);

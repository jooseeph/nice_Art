import {createUseStyles} from 'react-jss';

const styles = {
    public: {},
    content: {
        minHeight: 'calc(100vh - 700px) !important',
        // paddingTop: rem(sizes.headerNavbar)
    },
};


export const usePublicLayoutStyles = createUseStyles(styles);

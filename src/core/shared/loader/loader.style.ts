import {createUseStyles} from 'react-jss';

const styles = {
    loader: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff6e',
        backdropFilter: 'blur(2px)',
    },
    inner: {
        width: '48px',
        height: '48px',
        background: 'gray',
        display: 'inline-block',
        borderRadius: '50%',
        boxSizing: 'border-box',
        animation: '$animloader 1s ease-in infinite',
    },
    '@keyframes animloader': {
        '0%': {
            transform: 'scale(0)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1)',
            opacity: 0,
        },
    },
};

export const useLoaderStyles = createUseStyles(styles);

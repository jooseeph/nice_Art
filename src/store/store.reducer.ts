import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IState} from './store';
import {az} from '../assets/lang/az';
import {environment} from '../core/configs/app.config';
import {ILang} from '../assets/lang/lang';

const initialState: IState = {
    loader: false,
    navMenu: false,
    languages: [
        {
            id: 1,
            key: 'az',
            value: 'Az'
        }
    ],
    locale: az,
};

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setLoader: (state: IState, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        },
        toggleNavMenu: (state: IState) => {
            state.navMenu = !state.navMenu;
        },
        setLocale: (state: IState, action: PayloadAction<ILang>) => {
            const lang = {
                az
            };
            state.locale = lang[action.payload];
            localStorage.setItem(`${environment.applicationName}-locale`, action.payload);
        }
    },
});

export const {setLoader, toggleNavMenu, setLocale} = rootSlice.actions;

export default rootSlice.reducer;

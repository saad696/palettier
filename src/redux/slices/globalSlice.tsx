import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { constants } from '../../data/constants';
import { Gender } from '../../interface/interface';
// import type { RootState } from '../store';

// Define a type for the slice state
interface GlobalSliceState {
    isLogin: boolean;
    gender: Gender;
}

const initialState: GlobalSliceState = {
    isLogin: JSON.parse(
        (localStorage.getItem(constants.localStorageKeys.isLoggedIn) ||
            'false') as string
    ),
    gender: (localStorage.getItem(constants.localStorageKeys.gender) ||
        'female') as Gender,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        userLoggedIn: (state) => {
            state.isLogin = !state.isLogin;
        },
        chooseGender: (state, action: PayloadAction<Gender>) => {
            state.gender = action.payload;
        },
    },
});

export const { userLoggedIn, chooseGender } = globalSlice.actions;

// export const isLoggedIn = (state: RootState) => state.global.loggedIn

export default globalSlice.reducer;

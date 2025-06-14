import { IAuthProps, ICore } from "@/types/auth";
import { setErrorMessage } from "@/utils/helpers";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { postLoginThunk, postLogoutThunk, postRegisterThunk } from "./authThunk";

interface AuthProps {
    login: IAuthProps;
    core: ICore;
    register: IAuthProps;
}

const initialState: AuthProps = {
    login: {
        loading: 'idle',
        message: '',
        data: {},
    },
    core: {
        auth: false,
        me: {},
        token: '',
        role: ''
    },
    register: {
        loading: 'idle',
        message: '',
        data: {},
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(postLoginThunk.pending, (state) => {
            state.login.loading = 'pending'
        });
        builder.addCase(postLoginThunk.fulfilled, (state, action) => {
            const { payload } = action
            state.login.loading = 'succeeded'
            if (Object.keys(payload).length > 0) {
                let me = jwtDecode(payload?.token);
                state.core.me = me
                state.core.auth = true;
                state.core.role = payload?.role
                state.core.token = payload?.token
                Cookies.set('auth', payload?.token)
            }
        });
        builder.addCase(postLoginThunk.rejected, (state, action) => {
            let error: any = action.payload;
            state.login.loading = 'failed';
            state.login.message = setErrorMessage(error);
        });
        builder.addCase(postLogoutThunk.fulfilled, (state) => {
            state.core.auth = false;
            state.core.token = '';
            state.core.me = {};
            state.core.role = ''
            Cookies.remove('auth')
        });
        builder.addCase(postRegisterThunk.pending, (state) => {
            state.register.loading = 'pending'
        });
        builder.addCase(postRegisterThunk.fulfilled, (state, action) => {
            state.register.loading = 'succeeded'
        });
        builder.addCase(postRegisterThunk.rejected, (state, action) => {
            let error: any = action.payload;
            state.register.loading = 'failed';
            state.register.message = setErrorMessage(error);
        });
    }
})




export const { } = authSlice.actions

export default authSlice.reducer
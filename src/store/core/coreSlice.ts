// import { postLoginThunk, postLogoutThunk } from "@/app/auth/login/store/authThunk";
import { ICore } from "@/types/auth";
import { createSlice } from "@reduxjs/toolkit";


const initialState: ICore = {
    me: {},
    auth: false,
    token: ''
}

const coreSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        // builder.addCase(postLoginThunk.fulfilled, (state, action) => {

        //     const { payload } = action
        //     if (payload?.meta?.success) {
        //         let me = jwtDecode(payload?.data?.token);
        //         state.me = me
        //         state.auth = true;
        //         state.token = payload?.data?.token
        //         Cookies.set('auth', payload?.data?.token)
        //     }
        // });
        // builder.addCase(postLogoutThunk.fulfilled, (state) => {
        //     state.auth = false;
        //     state.token = '';
        //     state.me = {};
        //     Cookies.remove('auth')
        // })
    },

})

export default coreSlice.reducer
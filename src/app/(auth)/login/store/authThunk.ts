import { AUTH } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";




export const postLoginThunk = createAsyncThunk('auth/postLoginThunk', async (data: any, { rejectWithValue }) => {
    try {
        let response = await AUTH.postLogin(data)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})

export const postRegisterThunk = createAsyncThunk('auth/postRegisterinThunk', async (data: any, { rejectWithValue }) => {
    try {
        let response = await AUTH.postRegister(data)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})

export const postLogoutThunk = createAsyncThunk('auth/postLogoutThunk', async () => {
    return {}
})
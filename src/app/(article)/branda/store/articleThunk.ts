import { ARTICLE } from "@/services";
import { IParam } from "@/types/articles";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getArticleThunk = createAsyncThunk('article/getArticleThunk', async (params: IParam, { rejectWithValue }) => {
    try {
        let response = await ARTICLE.getArticle(params)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})


export const getCategoriesThunk = createAsyncThunk('categories/getCategoriesThunk', async (params: any, { rejectWithValue }) => {
    try {
        let response = await ARTICLE.getCategory(params)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})

export const postArticleThunk = createAsyncThunk('article/postArticleThunk', async (data: any, { rejectWithValue }) => {
    try {
        let response = await ARTICLE.postArticle(data)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})

export const deleteArticleThunk = createAsyncThunk('article/deleteArticleThunk', async (id: string, { rejectWithValue }) => {
    try {
        let response = await ARTICLE.deleteArticle(id)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})
export const getDetailArticleThunk = createAsyncThunk('article/deleteArticleThunk', async (id: string, { rejectWithValue }) => {
    try {
        let response = await ARTICLE.getDetailArticle(id)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})


export const updateArticleThunk = createAsyncThunk('article/updateArticleThunk', async (payload: any, { rejectWithValue }) => {
    try {
        let response = await ARTICLE.updateArticle(payload)
        return response.data
    } catch (error) {
        rejectWithValue(error)
    }
})







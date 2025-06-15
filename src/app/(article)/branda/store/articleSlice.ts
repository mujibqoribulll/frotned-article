import { IArticle } from "@/types/articles";
import { createSlice } from "@reduxjs/toolkit";
import { deleteArticleThunk, getArticleThunk, postArticleThunk, updateArticleThunk } from "./articleThunk";




const initialState: IArticle = {
    article: {
        loading: 'idle',
        message: '',
        data: {},

    },
    pagination: {
        limit: 10,
        page: 0,
        total: 0
    },
    categories: {
        loading: 'idle',
        message: '',
        data: {},
    }
}


const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getArticleThunk.pending, state => {
            state.article.loading = 'pending';
        });
        builder.addCase(getArticleThunk.fulfilled, (state, action) => {
            if (Object.keys(action?.payload?.data).length > 0) {
                state.article.loading = 'succeeded';
                state.article.data = action?.payload?.data
                state.pagination.limit = action?.payload?.limit
                state.pagination.page = action?.payload?.page
                state.pagination.total = action?.payload?.total
            }

        });
        builder.addCase(getArticleThunk.rejected, state => {
            state.article.loading = 'failed';
            state.article.data = {}
            state.pagination.limit = 0
            state.pagination.page = 0
            state.pagination.total = 0
        });
        builder.addCase(postArticleThunk.pending, state => {
            state.article.loading = 'pending';
        });
        builder.addCase(postArticleThunk.fulfilled, state => {
            state.article.loading = 'succeeded';
        });
        builder.addCase(postArticleThunk.rejected, state => {
            state.article.loading = 'failed';
        });
        builder.addCase(deleteArticleThunk.pending, state => {
            state.article.loading = 'pending';
        });
        builder.addCase(deleteArticleThunk.fulfilled, state => {
            state.article.loading = 'succeeded';
        });
        builder.addCase(deleteArticleThunk.rejected, state => {
            state.article.loading = 'failed';
        });
        builder.addCase(updateArticleThunk.pending, state => {
            state.article.loading = 'pending';
        });
        builder.addCase(updateArticleThunk.fulfilled, state => {
            state.article.loading = 'succeeded';
        });
        builder.addCase(updateArticleThunk.rejected, state => {
            state.article.loading = 'failed';
        });
    }

})

export const { } = articlesSlice.actions

export default articlesSlice.reducer
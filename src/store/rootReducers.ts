import { combineReducers } from "@reduxjs/toolkit";

import articleSlice from '../app/(article)/branda/store/articleSlice';
import authSlice from '../app/(auth)/login/store/authSlice';

const rootReducers = combineReducers({
    auth: authSlice,
    article: articleSlice
})

export default rootReducers
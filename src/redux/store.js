import {configureStore } from '@reduxjs/toolkit';
import chatReducers from '../redux/chatReducer'
export default configureStore({
    reducer: {
         chatReducers: chatReducers,
    },
  })
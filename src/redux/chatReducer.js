import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const chatSlice  = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers: {
        addMessage: (state,action) => {
         const msg = action.payload
           state.messages = [...state.messages,{id:uuidv4(),message:msg}]
        }
            ,
        deleteMessage: (state,action) => {
            state.messages = state.messages.filter(message => message.id !== action.payload)
        }
    } 
})
export const {addMessage,deleteMessage} = chatSlice.actions;
export default chatSlice.reducer;
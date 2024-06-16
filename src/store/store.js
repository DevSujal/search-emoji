import { configureStore } from "@reduxjs/toolkit";
import emojiReducer from "./emojiSlice";

export const store = configureStore({
    reducer : emojiReducer
})
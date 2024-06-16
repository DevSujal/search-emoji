import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  emojis: [{ id: 1, emoji: "😊", name: "Smiling Face with" }],
  category: "smiling face",
  search : ""
};

const emojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    addAllCategoryEmoji: (state, action) => {
      state.emojis = action.payload.emojis.map((emoji) => ({
        id: nanoid(),
        ...emoji,
      }));

      state.category = action.payload.category;
    },
    addSearch (state, action) {
        state.search = action.payload;
    },
  },
});

export const {addAllCategoryEmoji, addSearch} = emojiSlice.actions

const emojiReducer = emojiSlice.reducer

export default emojiReducer

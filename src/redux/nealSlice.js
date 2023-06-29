import { createSlice } from "@reduxjs/toolkit";

export const nealSlice = createSlice({
  name: "neal",
  initialState: {
    value: 100000000000,
    items: []
  },
  reducers: {
    setBuy: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.amou += action.payload.amou;
      } else {
        if (action.payload.price * action.payload.amou < state.value) {
          state.value -= action.payload.price * action.payload.amou;
          state.items = [...state.items, action.payload];
        } else {
          console.log("paran yetmez kardeş");
        }
      }
    },
    setSell: (state, action) => {
      const product = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (product) {
        if (product.amou < action.payload.amou) {
          return console.log("Bu kadar satış yapamazsınız");
        } else if (product.amou > action.payload.amou) {
          product.amou -= action.payload.amou;
          state.value += product.amou * product.price;
        } else {
          state.value += product.amou * product.price;
          state.items = state.items.filter(
            (item) => item.name !== product.name
          );
        }
      }
    }
  }
});
export const selectTotalMoney = (state) => state.neal.value;
export const selectedItems = (state) => state.neal.items;
export const { setBuy, setSell } = nealSlice.actions;

export default nealSlice.reducer;

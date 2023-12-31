import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //Mutating state here
    //Redux toolkit uses immer to mutate state behind the scene
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //RTK - either mutate the state or return a new state
      //state.item.length = 0 OR /return []
      state.items.length = 0;
      // return [{items: []}]; // this new [] will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

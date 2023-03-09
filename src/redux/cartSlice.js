import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// Backend or API data Call
const callback = "https://course-api.com/react-useReducer-cart-project"

// INITIALSTATE
const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoading: true,
};
// CREATEASYYNCTHUNK
export const getCartItems = createAsyncThunk("cart/getCartItem", async () => {
  try {
    const response = await axios.get(callback)
    return response.data
  }

  catch (error){console.log(error)}
});

// CREATE SLICE
const cartSlice = createSlice({
  name: "cart",
  initialState,
  // REDUCERS
  reducers: {
    clearCart: (state) => {state.cartItems = []},
    removeItem: (state, action) => {
      const cartId = action.payload;
      state.cartItems = state.cartItems.filter(
        (remove) => remove.id !== cartId
      );
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.amount;
        total += item.amount * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
  // EXTRA REDUCERS
  extraReducers: {
    
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// EXPORT SLICE.ACTIONS
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
// EXPORT SLICE.REDUCER
export default cartSlice.reducer;

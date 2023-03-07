import { createSlice } from "@reduxjs/toolkit"
import itemProduct from '../components/dataProduct'

const initialState = {
cartItems : itemProduct,
amount:0,
total:0,
isLoading: true,
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    clearCart:(state)=>{state.cartItems = []},

    removeItem: (state, action) => {
      const cartId = action.payload
      state.cartItems = state.cartItems.filter((remove) => remove.id !== cartId)
      },
      increase: (state, {payload}) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id)
        cartItem.amount = cartItem.amount + 1
        },
      decrease: (state, {payload}) => {
          const cartItem = state.cartItems.find((item) => item.id === payload.id)
          cartItem.amount = cartItem.amount - 1
          },





  }
})
export const {clearCart, removeItem, increase, decrease} = cartSlice.actions

export default cartSlice.reducer

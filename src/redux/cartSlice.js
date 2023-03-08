import { createSlice } from "@reduxjs/toolkit"
import itemProduct from '../components/template/dataProduct'

const initialState = {
cartItems : itemProduct,
quantity:0,
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
        cartItem.dataQty = cartItem.dataQty + 1
        },
      decrease: (state, {payload}) => {
          const cartItem = state.cartItems.find((item) => item.id === payload.id)
          cartItem.dataQty = cartItem.dataQty - 1
          },
      calculateTotals: (state) => {
        let quantity = 0
        let total = 0
        state.cartItems.forEach((item) =>{
          quantity += item.dataQty
          total += item.dataQty * item.dataPrice
        })
        state.quantity = quantity
        state.total = total
      }




  }
})
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions

export default cartSlice.reducer

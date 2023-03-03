import { createSlice } from "@reduxjs/toolkit"


const initialState = {
cartItems : [],
amount:0,
total:0,
isLoading: true,
}

const CartSlice = createSlice({
  name:'cart',
  initialState,
})

export default CartSlice.reducer

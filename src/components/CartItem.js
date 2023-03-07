import React from 'react'

import {Card} from 'react-bootstrap'

import { removeItem, increase, decrease } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, title, price, amount}) => {
const dispatch = useDispatch()
  return (
    <div>
      <Card>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <button onClick={()=>{dispatch(removeItem(id))}}>remove</button>
        
        
        <button onClick={()=>{dispatch(increase({id}))}}>UP</button>
        <p>{amount}</p>
        <button onClick={()=>{dispatch(decrease({id}))}}>Down</button>



      </Card>
    </div>
  )
}

export default CartItem

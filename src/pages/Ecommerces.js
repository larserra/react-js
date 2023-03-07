import React from 'react'
import CartItem from '../components/CartItem'
import { useDispatch,useSelector } from 'react-redux'
import { clearCart } from '../redux/cartSlice'

const Ecommerces = () => {
    const dispatch = useDispatch()
  const {cartItems, total, amount} = useSelector((store)=> store.cart)
  
  
if(cartItems < 1){
    return (
        <main> 
        <header>
            <h2>your bag</h2>
            <h4>is currently empty</h4>
        </header>
        </main>
    )}

return (
    <main>
    <header>
        <h2>your bag</h2>
    </header>
    <div>
        {cartItems.map((item)=>{
            return(
                <CartItem key={item.id} {...item}/>
            )
        })}
    </div>
    <footer>
        <hr/>
        <h4>total <span>P{total}</span></h4>
        {amount}
        <button onClick={()=>{dispatch(clearCart())}}>clear cart</button>
    </footer>
    </main>
  )
}

export default Ecommerces

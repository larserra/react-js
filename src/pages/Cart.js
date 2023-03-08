import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import CartItem from "../components/template/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {openModal} from '../redux/modalSlice'
import {RemoveAllIcons} from '../components/template/Icons'

const Cart = () => {

  const dispatch = useDispatch();

  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  
  
  if (cartItems < 1) {
    return (
      <main>
        <header>
          <h2>your bag</h2>
          <h4>is currently empty</h4>
        </header>
      </main>
    );
  }

  return (
    <main>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <Row>
          <hr />
          <Col>
            {" "}
            <h4>QTY: {quantity}</h4>
            <h4>
              total <span>P{total.toFixed(2)}</span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col >
          
          <Button onClick={dispatch(openModal())} variant='outline-danger'>
          <RemoveAllIcons/ >
           Clear all</Button>
          </Col>
        </Row>
      </footer>
    </main>
  );
};

export default Cart;

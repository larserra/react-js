import React, { useEffect } from "react";

import { Button, Row, Col } from "react-bootstrap";
import CartItem from "../components/template/CartItem";
import { RemoveAllIcons } from "../components/template/Icons";

import { useDispatch, useSelector } from "react-redux";
import { getCartItems, calculateTotals } from "../redux/cartSlice";

import { openModal } from "../redux/modalSlice";
import Modals from "../components/Modals";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, quantity, isLoading } = useSelector(
    (state) => state.cart
  );
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);



  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isOpen){return(<main><Modals/></main>)}

  if (cartItems < 1) {
    return (
      <main>
        <header>
          <h2>your bag</h2>
          <h4>is currently empty</h4>
        </header>
      </main>
    );
  } else
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
            <Col>
              <Button
                variant="outline-danger"
                onClick={() => {
                  dispatch(openModal());
                }}
              >
             
                <RemoveAllIcons />
                Clear all
              </Button>
            </Col>
          </Row>
        </footer>
      </main>
    );
};

export default Cart;

import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';

import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cartSlice'

import {closeModal} from '../../redux/modalSlice'


const ModalRemove = () => {

const dispatch = useDispatch()

  return (
 
  
  <Modal
   
  >
    <Modal.Header closeButton>
      <Modal.Title>Remove All Item</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Clear All Item on Shopping Cart
    </Modal.Body>
    <Modal.Footer>
     
      <Button type='button' variant="secondary" onClick={()=>{
        dispatch(clearCart())
         dispatch(closeModal())
        }}>
        Yes
      </Button>
      <Button variant="primary" onClick={dispatch(closeModal())}>No</Button>
    
    </Modal.Footer>
  </Modal>

  )
}

export default ModalRemove

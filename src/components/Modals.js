import React from 'react';
import {Button, Modal} from 'react-bootstrap';

import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import {closeModal} from '../redux/modalSlice'


const Modals = () => {

const dispatch = useDispatch()

  return (
   <div className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
      <Button type='button' variant="secondary" onClick={()=>{
        dispatch(clearCart())
         dispatch(closeModal())
        }}>
        Yes
      </Button>
      <Button variant="primary" onClick={()=> {dispatch(closeModal())}}>No</Button>
    
      </Modal.Footer>
      </Modal.Dialog>
</div>
  )
}

export default Modals

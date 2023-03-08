import React from 'react'

import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import {RemoveIcons, UpIcons, DownIcons} from './Icons'

import { removeItem, increase, decrease } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, title, dataPrice, dataQty}) => {
const dispatch = useDispatch()
  return (
    <Container>
      <Card className='m-2, p-2'>
      <Row>
      <Col >
        <h4>{title}</h4>
        <h4>{dataPrice}</h4>
       
        <Button onClick={()=>{dispatch(removeItem(id))}} variant='outline-primary'>
        <RemoveIcons/> remove
        </Button>
        </Col>
        <Col className='text-center'>
      
        <Button onClick={()=>{dispatch(increase({id}))}} variant='outline-primary'>
        <UpIcons/>
        </Button>
        <h1 >{dataQty}</h1>
        <Button onClick={()=>{
          if (dataQty === 1) {dispatch(removeItem(id))}
          dispatch(decrease({id}))}} variant='outline-primary'>
             <DownIcons/>
          </Button>
          </Col>
</Row>
         

      </Card>
    </Container>
  )
}

export default CartItem

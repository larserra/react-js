import React from 'react'
import {Form} from 'react-bootstrap'


const InputForms = ({type, name, value, handleChange, placeholder, label}) => {
  return (
    <>

      {/* <input type={type} name={name} value={value} onChange={handleChange}/> */}
   

<Form.Group className="mb-3">
                      <Form.Label ><h4>{label}</h4></Form.Label>
                      <Form.Control type={type} placeholder={placeholder}
                        name={name} value={value} onChange={handleChange}
                      />
                    </Form.Group>

</>
  )
}

export default InputForms

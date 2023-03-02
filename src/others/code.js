import React, {useEffect, useState} from 'react'

import axios from 'axios'//AXIOS

const url = 'http' // sample json data

const code = () => {
const [item, setItem] = useState('item1')
// fetch data
    const fetchData = async () => {
        try{ 
            const {data} = await axios(url,{headers: {Accept: 'application/json'}})
            setItem(data.item)
    }
        catch (error) {}
    }
// use effect
    useEffect(() => {
        fetchData()
    }, [])

// --------------------------------------------handleSubmit
const [name, setName] = useState('')
const [email, setEmail] = useState('')
 
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const resp = await axios.post(url, {name, email})
        resp.data
    }
    catch(error){}
}

// return
  return (
    <div>
      <bottun onClick={fetchData}>random item</bottun>
    <p >{item}</p>



{/* FORM */}
<form onSubmit={handleSubmit}>
    <input type='text' className='' value='' onChange={() => {}}></input>
</form>



    </div>
  )
}

export default code





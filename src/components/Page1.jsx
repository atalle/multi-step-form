import React from 'react'

export default function Page1(props) {
  const { orderData, setOrderData } = props

  function handleChange(event) {
    const {name, value} = event.target
    setOrderData((prevData) => ({ ...prevData, [name]: value,}))
  }

  return (
    <main className='form-container'>
      <label htmlFor="name" className='form--label'>Name</label>
      <input 
        name="name"
        type="text"
        className="form--input" 
        id="name"
        placeholder="e.g. Stephen King"
        value={orderData.name}
        onChange={handleChange}
      />

      <label htmlFor="email" className='form--label'>Email Address</label>
      <input 
        name="email"
        type="email"
        className="form--input" 
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        value={orderData.email}
        onChange={handleChange}
      />

      <label htmlFor="phone" className='form--label'>Phone Number</label>
      <input 
        name="phone"
        type="number"
        className="form--input" 
        id="phone"
        placeholder="e.g. +1 234 567 890"
        value={orderData.phone}
        onChange={handleChange}
      />
    </main>
  )
}
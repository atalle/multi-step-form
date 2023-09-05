import React, { useState } from 'react';

export default function Page3(props) {
  const { orderData, setOrderData } = props;

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addOnOptions = [
    { id: 4, name: 'Online service', description: 'Access to multi-player games', price: 1, annualPrice: 10 },
    { id: 5, name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, annualPrice: 20 },
    { id: 6, name: 'Customizable profile', description: 'Custom theme on your profile', price: 2, annualPrice: 20 },
  ];

  function handleCheckboxChange(option) {
    setSelectedAddOns(prevSelectedAddOns => {
      if (prevSelectedAddOns.includes(option)) {
        return prevSelectedAddOns.filter(item => item.id !== option.id)
      } else {
        return [...prevSelectedAddOns, option]
      }
    }) 

    setOrderData(prevOrderData => ({
      ...prevOrderData,
      selectedAddOns: selectedAddOns
    }));
  };

  console.log(orderData)
  return (
    <main className="addOns-container">
      {addOnOptions.map(option => (
        <div key={option.id} className={`addOn--card ${selectedAddOns.some(item => item.id === option.id) ? 'selected--card' : ''}`}>
          <input 
            type="checkbox"
            id={`option${option.id}`}
            name={`option${option.id}`}
            value={`option${option.id}`}
            className="addOn--checkbox"
            checked={selectedAddOns.some(item => item.id === option.id)}
            onChange={() => handleCheckboxChange(option)}
          />
          <div className="addOn--card-content">
            <label htmlFor={`option${option.id}`} className="checkbox--label addOn--title">{option.name}</label>
            <p className="addOn--description">{option.description}</p>
          </div>
          <p className="addOn--price">${option.price}/mo</p>
        </div>
      ))}
    </main>
  );
}
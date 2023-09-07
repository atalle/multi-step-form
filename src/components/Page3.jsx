import React, { useState } from 'react';

export default function Page3(props) {
  const { orderData, setOrderData } = props;

  const [selectedAddOns, setSelectedAddOns] = useState(orderData.selectedAddOns);

  const addOnOptions = [
    { id: 1, name: 'Online service', description: 'Access to multi-player games', price: 1, annualPrice: 10 },
    { id: 2, name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, annualPrice: 20 },
    { id: 3, name: 'Customizable profile', description: 'Custom theme on your profile', price: 2, annualPrice: 20 },
  ];

  function handleCheckboxChange() {

  };

  return (
    <main className="addOns-container">

    </main>
  );
}
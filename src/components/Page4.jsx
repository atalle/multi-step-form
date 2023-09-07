import React, { useState } from 'react';

export default function Page4(props) {
  const { orderData, setOrderData } = props;
  const { isAnnualBilling } = orderData
  const { planPrice } = orderData
  const { selectedAddOns } = orderData

  function calculateOrderTotal() {
    const addOnPrices = selectedAddOns.map(addOn => isAnnualBilling ? addOn.annualPrice : addOn.price)
    return addOnPrices.reduce((total, price) => total + price, planPrice)
  }

  const [orderTotal, setOrderTotal] = useState(calculateOrderTotal())
   
  return(
    <h1>{orderTotal}</h1>
  )
}
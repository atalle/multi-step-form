import React, { useState, useEffect } from 'react'
import iconArcade from '../assets/icon-arcade.svg'
import iconAdvanced from '../assets/icon-advanced.svg'
import iconPro from '../assets/icon-pro.svg'

export default function Page2(props) {
  const { orderData, setOrderData } = props

  const initialSelectedPlanId = orderData.plan && orderData.plan.id ? orderData.plan.id : null;
  const [selectedPlanId, setSelectedPlanId] = useState(initialSelectedPlanId)
  const [isAnnualBilling, setIsAnnualBilling] = useState(orderData.isAnnualBilling);

  const planOptions = [
    { id: 1, name: 'Arcade', price: 9, annualPrice: 90, icon: iconArcade},
    { id: 2, name: 'Advanced', price: 12, annualPrice: 120, icon: iconAdvanced},
    { id: 3, name: 'Pro', price: 15, annualPrice: 150, icon: iconPro},
  ]

  function handleCardClick(plan) {
    setSelectedPlanId(plan.id)
    setOrderData((prevData) => ({
      ...prevData,
      plan: plan,
      planPrice: isAnnualBilling ? plan.annualPrice : plan.price
    }))
  }

  function calculatePlanPrice() {
    if (selectedPlanId) {
      const selectedPlanObject = planOptions.find((plan) => plan.id === selectedPlanId);
      return isAnnualBilling ? selectedPlanObject.price : selectedPlanObject.annualPrice;
    }
  }

  function toggleBillingCycle() {
    setIsAnnualBilling(!isAnnualBilling);  
    setOrderData((prevData) => ({
      ...prevData,
      isAnnualBilling: !isAnnualBilling,
      planPrice: calculatePlanPrice()
    }));
  }

  return (
    <main className='plan-container'>

      <div className='card-group'>
        {planOptions.map(plan => (
          <div 
            key={plan.id} 
            className={`plan--card ${selectedPlanId === plan.id ? 'selected--card' : ''}`}
            onClick={() => handleCardClick(plan)}
          >
            <img src={plan.icon} className='plan--card-icon' />
            <div className='card--content'>
              <h3 className='plan--card-name'>{plan.name}</h3>
              <p className='plan--card-price'>
                ${isAnnualBilling ? plan.annualPrice : plan.price}/ 
                {isAnnualBilling ? 'yr' : 'mo'}
              </p>
              {isAnnualBilling && (
                <p className='plan--annual-text'>2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>  

      <div className="toggle-container" onClick={(toggleBillingCycle)}>
        <p className={`toggle--label ${!isAnnualBilling ? 'toggle--selected' : ''}`}>Monthly</p>
        <div className="toggle">
          <div className={`toggle-dot ${isAnnualBilling ? 'toggle-dot-right' : ''}`}></div>
        </div>
        <p className={`toggle--label ${isAnnualBilling ? 'toggle--selected' : ''}`}>Yearly</p>
      </div>
    </main>
  )
}
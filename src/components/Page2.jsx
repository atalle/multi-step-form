import React, { useState } from 'react'
import iconArcade from '../assets/icon-arcade.svg'
import iconAdvanced from '../assets/icon-advanced.svg'
import iconPro from '../assets/icon-pro.svg'

const iconMap = {
  Arcade: iconArcade,
  Advanced: iconAdvanced,
  Pro: iconPro,
}

export default function Page2(props) {
  const { orderData, setOrderData } = props

  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isAnnualBilling, setIsAnnualBilling] = useState(orderData.isAnnualBilling)

  const planOptions = [
    { id: 1, name: 'Arcade', price: 9},
    { id: 2, name: 'Advanced', price: 12},
    { id: 3, name: 'Pro', price: 15},
  ]

  function handleCardClick(plan) {
    setSelectedPlan(plan.id)
    setOrderData((prevData) => ({
      ...prevData,
      plan: plan.name,
      planPrice: plan.price
    }))
  }

  function toggleBillingCycle() {
    setIsAnnualBilling(!isAnnualBilling)
    setOrderData((prevData) => ({
      ...prevData,
      isAnnualBilling: isAnnualBilling 
    }))
  }

  return (
    <main className='plan-container'>

      {/* DYNAMICALLY RENDER PRICE CHANGE WHEN ANNUAL BILLING IS TRUE! */}
      <div className="card-group">
        {planOptions.map(plan => (
          <div 
            key={plan.id} 
            className={`plan--card ${selectedPlan === plan.id ? 'selected--card' : ''}`}
            onClick={() => handleCardClick(plan)}
          >
            <img src={iconMap[plan.name]} className="plan--card-icon" />
            <div className="card--content">
              <h3 className='plan--card-name'>{plan.name}</h3>
              <p className='plan--card-price'>${plan.price}/mo</p>
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
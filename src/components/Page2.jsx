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

  const planOptions = [
    { id: 1, name: 'Arcade', price: 9},
    { id: 2, name: 'Advanced', price: 12},
    { id: 3, name: 'Pro', price: 15},
  ]

  return (
    <main className='plan-container'>

      {/* FIX RESPONSIVE PLAN CARDS */}
      <div className="card-group">
        {planOptions.map(plan => (
          <div key={plan.id} className='plan--card'>
            <img src={iconMap[plan.name]} className="plan--card-icon" />
            <div className="card--content">
              <h3 className='plan--card-name'>{plan.name}</h3>
              <p className='plan--card-price'>${plan.price}/mo</p>
            </div>
          </div>
        ))}
      </div>  

      {/* LEFT OFF HERE */}
      <div className="toggle-container">
        <p className="toggle--label toggle--selected">Monthly</p>
        <div className="toggle"></div>
        <p className="toggle--label">Yearly</p>
      </div>
    </main>
  )
}
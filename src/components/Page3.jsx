import React from 'react'

export default function Page3(props) {
    const { orderData, setOrderData } = props

    const addOnOptions = [
        { id: 4, name: 'Online service', description: 'Access to multi-player games', price: 1, annualPrice: 10 },
        { id: 5, name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, annualPrice: 20 },
        { id: 6, name: 'Customizable profile', description: 'Custom theme on your profile', price: 2, annualPrice: 20 },
    ]

   function handleCheckboxChange(option) {
        // Check if the option is included in the orderData.selectedAddOns array
        // If yes, remove it from the array; otheriwse add it to the array 
        const updatedSelectedAddOns = orderData.selectedAddOns.includes(option)
            ? orderData.selectedAddOns.filter(item => item.id !== option.id)
            : [...orderData.selectedAddOns, option]

        setOrderData(prevOrderData => ({
            ...prevOrderData,
            selectedAddOns: updatedSelectedAddOns
        }))

        // BUG! Checkboxes are getting added muliple times to orderData ...
   }

    return (
        <main className="addOns-container">
            {addOnOptions.map(option => (
                <div key={option.id}>
                    <input 
                        type="checkbox"
                        id={`option${option.id}`}
                        name={`option${option.id}`}
                        value={`option${option.id}`}
                        className="checkbox--icon"
                        checked={orderData.selectedAddOns.some(item => item.id === option.id)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    <label htmlFor={`option${option.id}`} className="checkbox--label">{option.name}</label>
                </div>
            ))}
        </main>
    )
}
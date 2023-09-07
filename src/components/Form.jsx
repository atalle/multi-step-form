import React, { useState } from 'react'

export default function Form(props) {
  const { currentPage, setCurrentPage, formContent } = props;

  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: null,
    planPrice: null,
    isAnnualBilling: false,
    selectedAddOns: [],
  })

  const stepProps = {
    orderData: orderData,
    setOrderData: setOrderData,
  }

  function handleNextStep() {
    const nextIdx = currentPage.id + 1
    if (nextIdx < formContent.length) {
      setCurrentPage(formContent[nextIdx])
    }
  }

  function handlePrevStep() {
    const prevIdx = currentPage.id - 1
    if (prevIdx >= 0) {
      setCurrentPage(formContent[prevIdx])
    }
  }

  return(
    <div className='page-container'>
      <div>
        <h1 className='page--title'>{currentPage.title}</h1>
        <p className='page--description'>{currentPage.description}</p>

        {currentPage.component && React.cloneElement(currentPage.component, stepProps)} 

      </div>
      <div className="btn--group">
        <button className='btn btn--ghost' onClick={handlePrevStep}>Go Back</button>
        <button className='btn' onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  )
}
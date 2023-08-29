import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'


export default function App() { 
  const formContent = [
    {
      id: 0,
      page: 1,
      label: 'Your info',
      title: 'Personal info',
      description: 'Please provide your name, email, and phone number.',
      component: <Page1 />
    },
    {
      id: 1,
      page: 2,
      label: 'Select plan',
      title: 'Select your plan',
      description: 'You have the option of monthly or yearly billing.',
      component: <Page2 />
    },
    {
      id: 2,
      page: 3,
      label: 'Add-ons',
      title: 'Pick add-ons',
      description: 'Add-ons help enhance your gaming experience.',
      component: <Page3 />
    },
    {
      id: 3,
      page: 4,
      label: 'Summary',
      title: 'Finishing up',
      description: 'Double-check everything looks OK before confirming.',
      component: <Page4 />
    }
  ]

  const [currentPage, setCurrentPage] = useState(formContent[0])

  return (
    <div className='app-container'>
      <Navbar 
        currentPage={currentPage} 
        formContent={formContent}
      />
      <Form 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        formContent={formContent}
      />
    </div>
  )
}


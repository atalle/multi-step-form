import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar(props) {
  const { currentPage, formContent } = props

  const navItems = formContent.map(item => {
    return <NavbarItem 
      key= {item.id}
      selected= {item.id === currentPage.id}
      {...item}
    />
  })

  return(
    <div className='nav-container'>
      {navItems}
    </div>
  )
}
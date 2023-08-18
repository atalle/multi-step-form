import React from 'react'

export default function NavbarItem(props) {

  return(
    <div className="nav--item">
      <div className={`nav--item-num ${props.selected ? 'selected' : ''}`}>{props.page}</div>
      <div>
        <p className='nav--item-step'>Step {props.page}</p>
        <p className='nav--item-label'>{props.label}</p>
      </div>
    </div>
  )
}
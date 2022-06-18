import React from 'react'

export const BugerMenu = ({ onClick, open }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`navbar-burger ${open ? 'is-active' : ' '}`}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  )
}

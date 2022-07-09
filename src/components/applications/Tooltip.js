import React from 'react'

export const Tooltip = ({ children, isOpen }) => {
  return (
    <div
      className={`skills-tooltip is-flex is-justify-content-center is-align-items-center has-text-centered p-4 ${
        isOpen || 'is-hidden'
      }`}
    >
      {children}
    </div>
  )
}

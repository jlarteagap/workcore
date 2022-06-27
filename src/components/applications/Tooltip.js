import React from 'react'

export const Tooltip = ({ children }) => {
  return (
    <div className="skills-tooltip is-flex is-justify-content-center is-align-items-center has-text-centered p-4">
      {children}
    </div>
  )
}

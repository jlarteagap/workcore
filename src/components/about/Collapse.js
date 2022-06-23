import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
export const Collapse = ({ title, collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  return (
    <div className="mb-2">
      <button
        className={`collapse-button is-flex is-align-items-center is-justify-content-space-between`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h3 className="is-size-5 has-text-weight-bold">{title}</h3>
        {isCollapsed ? <FaPlus size={24} /> : <FaTimes size={24} />}
      </button>
      <div
        className={`collapse-content notification ${
          isCollapsed ? 'collapsed' : 'expanded'
        }`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { BugerMenu } from './BugerMenu'
import './header.css'
import { Menu } from './Menu'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
            <BugerMenu
              open={open}
              onClick={() => {
                setOpen(!open)
              }}
            />
          </div>

          <Menu
            open={open}
            onClick={() => {
              setOpen(!open)
            }}
          />
        </nav>
      </div>
    </div>
  )
}

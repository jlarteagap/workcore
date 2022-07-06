import React, { useState } from 'react'
import { BugerMenu } from './BugerMenu'
import './header.css'
import { Menu } from './Menu'
import useData from '../../hooks/useData'

export default function Header() {
  const { empresa } = useData()
  const [open, setOpen] = useState(false)

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a
              className="header__logo navbar-item animate__animated animate__fadeInLeft"
              href={empresa.url}
            >
              <img src={empresa.logo} width="150" alt={empresa.nombre} />
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

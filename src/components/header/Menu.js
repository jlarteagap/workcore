import React from 'react'

export const Menu = ({ onClick, open }) => {
  return (
    <div className={`header__menu navbar-menu ${open ? 'is-active' : ''}`}>
      <div className="navbar-end">
        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
        >
          Home
        </a>

        <a
          className="header__menu-item navbar-item has-text-weight-bold"
          onClick={onClick}
        >
          Características
        </a>
        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
        >
          Módulos
        </a>

        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
        >
          Contacto
        </a>
      </div>
    </div>
  )
}

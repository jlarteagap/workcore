import React from 'react'

export const Menu = () => {
  return (
    <div className={`header__menu navbar-menu`}>
      <div className="navbar-end">
        <a className="header__menu-item navbar-item has-text-weight-bold ">
          Home
        </a>

        <a className="header__menu-item navbar-item has-text-weight-bold">
          Características
        </a>
        <a className="header__menu-item navbar-item has-text-weight-bold ">
          Módulos
        </a>

        <a className="header__menu-item navbar-item has-text-weight-bold ">
          Contacto
        </a>
      </div>
    </div>
  )
}

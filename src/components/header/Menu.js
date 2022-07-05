import React from 'react'

export const Menu = ({ onClick, open }) => {
  return (
    <div className={`header__menu navbar-menu ${open ? 'is-active' : ''}`}>
      <div className="navbar-end">
        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
          href="#inicio"
        >
          Inicio
        </a>
        <a
          className="header__menu-item navbar-item has-text-weight-bold"
          onClick={onClick}
          href="#aplicaciones"
        >
          Aplicaciones
        </a>
        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
          href="#habilidades"
        >
          Habilidades
        </a>

        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
          href="#workcore"
        >
          Sobre Workcore
        </a>
        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
          href="#datos"
        >
          Datos curiosos
        </a>
        <a
          className="header__menu-item navbar-item has-text-weight-bold "
          onClick={onClick}
          href="#contacto"
        >
          Contactanos
        </a>
      </div>
    </div>
  )
}

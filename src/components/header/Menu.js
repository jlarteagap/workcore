import React from 'react'
import useData from '../../hooks/useData'

export const Menu = ({ onClick, open }) => {
  const { sections } = useData()

  return (
    <div className={`header__menu navbar-menu ${open ? 'is-active' : ''}`}>
      <div className="navbar-end">
        <a
          className="header__menu-item navbar-item  has-text-weight-light"
          onClick={onClick}
          href="#inicio"
        >
          Inicio
        </a>
        {sections.aplicaciones && (
          <a
            className="header__menu-item navbar-item  has-text-weight-light"
            onClick={onClick}
            href="#aplicaciones"
          >
            Aplicaciones
          </a>
        )}
        {sections.habilidades && (
          <a
            className="header__menu-item navbar-item  has-text-weight-light"
            onClick={onClick}
            href="#habilidades"
          >
            Habilidades
          </a>
        )}

        {sections.workcore && (
          <a
            className="header__menu-item navbar-item  has-text-weight-light"
            onClick={onClick}
            href="#workcore"
          >
            Sobre Workcore
          </a>
        )}
        {sections.datos && (
          <a
            className="header__menu-item navbar-item  has-text-weight-light"
            onClick={onClick}
            href="#datos"
          >
            Datos curiosos
          </a>
        )}
        <a
          className="header__menu-item navbar-item  has-text-weight-light"
          onClick={onClick}
          href="#contacto"
        >
          Contactanos
        </a>
      </div>
    </div>
  )
}

import React from 'react'
import useData from '../../hooks/useData'
import { Link } from 'react-scroll'
const { LOGIN } = window.CONFIG
export const Menu = ({ onClick, open }) => {
  const { sections } = useData()

  return (
    <div className={`header__menu navbar-menu ${open ? 'is-active' : ''}`}>
      <div className="navbar-end">
        <Link
          activeClass="active"
          className="header__menu-item navbar-item has-text-weight-light animate__animated animate__fadeInDown"
          onClick={onClick}
          spy={true}
          smooth={true}
          duration={500}
          to="inicio"
          isDynamic={true}
        >
          Inicio
        </Link>
        {sections.aplicaciones && (
          <Link
            className="header__menu-item navbar-item has-text-weight-light animate__animated animate__fadeInDown aniamte__delay-2s"
            onClick={onClick}
            to="aplicaciones"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            Aplicaciones
          </Link>
        )}
        {sections.habilidades && (
          <Link
            className="header__menu-item navbar-item has-text-weight-light animate__animated animate__fadeInDown aniamte__delay-2s"
            onClick={onClick}
            to="habilidades"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            isDynamic={true}
            offset={0}
          >
            Habilidades
          </Link>
        )}

        {sections.workcore && (
          <Link
            className="header__menu-item navbar-item has-text-weight-light animate__animated animate__fadeInDown aniamte__delay-2s"
            onClick={onClick}
            to="workcore"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            Sobre Workcore
          </Link>
        )}
        {sections.datos && (
          <Link
            className="header__menu-item navbar-item has-text-weight-light animate__animated animate__fadeInDown aniamte__delay-2s"
            onClick={onClick}
            to="datos"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            isDynamic={true}
            offset={-130}
          >
            Datos curiosos
          </Link>
        )}
        <Link
          className="header__menu-item navbar-item  has-text-weight-light animate__animated animate__fadeInDown aniamte__delay-2s"
          onClick={onClick}
          to="contacto"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
          offset={-50}
        >
          Contactanos
        </Link>
        <div className="navbar-item">
          <div className="buttons">
            <a
              className="button is-light header__button is-small"
              href={LOGIN}
              target="_blank"
              rel="noreferrer"
            >
              Ingresar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

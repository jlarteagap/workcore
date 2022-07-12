import React from 'react'
import './footer.css'
import workcore from '../../assets/workcore__blanco.png'
import { HiChevronDoubleUp } from 'react-icons/hi'
import { Social } from '../utils/SocialIcons'
import useData from '../../hooks/useData'
import { Link } from 'react-scroll'

export default function Footer() {
  const { empresa } = useData()

  const d = new Date()
  return (
    <footer className="footer">
      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-5">
        <Link className="pb-5" to="home">
          <HiChevronDoubleUp size={36} className="upButtons" />
        </Link>
        <div className="footer__brand is-flex is-align-items-center">
          <div className="footer__brand-logo py-4 pr-4 is-flex">
            <img src={workcore} alt={empresa.nombre} />
          </div>
          <div className="footer__brand-social-content pl-4">
            <Social />
          </div>
        </div>
        <div className="copyright mt-5">
          © {d.getFullYear()} {empresa.nombre}
        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import { Titles } from '../utils/Titles'
import './applications.css'
import { Services } from './Services'
import { Skills } from './Skills'
import laptop from '../../assets/mac.png'
export default function Application() {
  return (
    <section className="applications">
      <div className="">
        <img src={laptop} alt="laptop" />
      </div>
      <div className="container">
        <Titles title="Aplicaciones" />
        <Services />
      </div>
      {/* Skills */}

      <div className="skills">
        <div className="skills__header is-flex is-align-items-center is-flex-direction-column has-text-centered">
          <div className="skills__header-title has-text-weight-light is-size-2 is-size-5-mobile">
            NUESTRAS HABILIDADES
          </div>
          <span className="skills__header-desc">
            Contamos con experiencia y destreza en tecnologías
          </span>
          <Skills />
        </div>
      </div>
    </section>
  )
}

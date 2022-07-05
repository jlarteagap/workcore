import React, { useRef } from 'react'
import { Titles } from '../utils/Titles'
import './applications.css'
import { Services } from './Services'
import { Skills } from './Skills'
import { Mac } from './Mac'
import useOnScreen from '../../hooks/useObserver'

export default function Application() {
  const elementRef = useRef(null)

  const isOnScreen = useOnScreen(elementRef)
  return (
    <section className="applications">
      <Mac />
      <div className="container">
        <Titles title="Aplicaciones" />
        <Services />
      </div>
      {/* Skills */}

      <div className="skills" ref={elementRef}>
        <div className="skills__header is-flex is-align-items-center is-flex-direction-column has-text-centered">
          <div
            className={`skills__header-title has-text-weight-light is-size-2 is-size-5-mobile ${
              isOnScreen &&
              'animate__animated animate__fadeInDown aniamte__delay-1s'
            }`}
          >
            NUESTRAS HABILIDADES
          </div>
          <span
            className={`skills__header-desc ${
              isOnScreen &&
              'animate__animated animate__fadeInUp aniamte__delay-1s'
            }`}
          >
            Contamos con experiencia y destreza en tecnologías
          </span>
          <Skills />
        </div>
      </div>
    </section>
  )
}

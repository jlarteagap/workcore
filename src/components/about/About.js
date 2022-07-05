import React, { useRef } from 'react'
import './about.css'

import about from '../../assets/about.jpg'
import { Modelo } from './Modelo'
import { Titles } from '../utils/Titles'
import { Accordion } from './Accordion'

import useOnScreen from '../../hooks/useObserver'

export default function About() {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)

  return (
    <section className="about">
      <div className="container">
        <Titles title="Acerca de Workcore" />
        <div className="about__body">
          <div className="columns">
            <div
              className={`column about__img ${
                isOnScreen && 'animate__animated animate__fadeInLeft'
              }`}
              ref={elementRef}
            >
              <img
                className="about__img-cover"
                src={about}
                alt="acerca de nosotros"
              />
            </div>
            <Accordion />
          </div>
          <Modelo />
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import './about.css'

import about from '../../assets/about.jpg'
import { Modelo } from './Modelo'
import { Titles } from '../utils/Titles'
import { Accordion } from './Accordion'
export default function About() {
  return (
    <section className="about">
      <div className="container">
        <Titles title="Acerca de Workcore" />
        <div className="about__body">
          <div className="columns">
            <div className="about__img column">
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

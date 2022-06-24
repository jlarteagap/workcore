import React from 'react'
import './about.css'
import { Collapse } from './Collapse'
import about from '../../assets/about.jpg'
import { Modelo } from './Modelo'
import { Titles } from '../utils/Titles'
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
            <div className="column">
              <Collapse title="¿POR QUÉ WORKCORE?">
                <h1>This is a collapse</h1>
                <p>Hello world!</p>
              </Collapse>
              <Collapse title="MISIÓN">
                <h1>This is a collapse</h1>
                <p>Hello world!</p>
              </Collapse>
              <Collapse title="VISIÓN">
                <h1>This is a collapse</h1>
                <p>Hello world!</p>
              </Collapse>
              <Collapse title="HISTORIA">
                <h1>This is a collapse</h1>
                <p>Hello world!</p>
              </Collapse>
            </div>
          </div>
          <Modelo />
        </div>
      </div>
    </section>
  )
}

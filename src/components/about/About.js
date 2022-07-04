import React, { useEffect, useRef, useState } from 'react'
import './about.css'

import about from '../../assets/about.jpg'
import { Modelo } from './Modelo'
import { Titles } from '../utils/Titles'
import { Accordion } from './Accordion'

export default function About() {
  const aboutImgRef = useRef(null)
  const [entryObserver, setEntryObserver] = useState(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setEntryObserver(true)
      }
    })

    observer.observe(aboutImgRef.current)
  }, [])

  return (
    <section className="about">
      <div className="container">
        <Titles title="Acerca de Workcore" />
        <div className="about__body">
          <div className="columns">
            <div
              className={`about__img ${
                entryObserver && 'animate__animated animate__fadeInLeft'
              }`}
              ref={aboutImgRef}
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

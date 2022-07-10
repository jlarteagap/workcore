import React, { useEffect, useState, useRef } from 'react'

import { getData } from '../../api/Api'
import useOnScreen from '../../hooks/useObserver'
import useData from '../../hooks/useData'
import Tippy from '@tippyjs/react'

export const Skills = () => {
  const { updateSections } = useData()

  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  const [skills, setSkills] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('servicios', 'NUESTRAS HABILIDADES')
        setSkills(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (skills.length > 0) {
      updateSections('habilidades')
    }
  }, [skills])

  return (
    <div className="skills__content py-5" ref={elementRef}>
      {skills.map((skill, index) => {
        return (
          <Tippy
            key={index}
            content={
              <div dangerouslySetInnerHTML={{ __html: skill.CONTENIDO }}></div>
            }
            trigger="click"
            placement="bottom"
            className="skills-tooltip has-text-centered"
          >
            <div
              className={`${
                skill.CATEGORIA === 'NUESTRAS HABILIDADES'
                  ? 'skills-items is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-5'
                  : 'is-hidden'
              } ${
                isOnScreen && 'animate__animated animate__fadeInLeft'
              } skill-item-${index}`}
              key={index}
            >
              <div>
                <img
                  className="skills-img"
                  src={skill.IMAGENES[0].URL}
                  alt={skill.TITULO}
                  loading="lazy"
                />
                <p className="p-0 m-0 has-text-centered mt-3 has-text-weight-bold">
                  {skill.TITULO}
                </p>
              </div>
            </div>
          </Tippy>
        )
      })}
    </div>
  )
}

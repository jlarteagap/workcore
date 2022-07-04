import React, { useEffect, useState, useRef } from 'react'
import { getData } from '../../api/Api'

import useOnScreen from '../../hooks/useObserver'
export const Bussines = () => {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  const [business, setBusiness] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('servicios', 'MODELO DE NEGOCIO')
        setBusiness(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="modelo__icons modelo__padding" ref={elementRef}>
      {business.map((item, index) => {
        return (
          <div
            className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center has-text-centered"
            key={index}
          >
            <img
              className={`modelo__icons-img ${
                isOnScreen && 'animate__animated animate__fadeIn'
              }`}
              src={item.IMAGENES[0].URL}
              alt={item.TITULO}
              loading="lazy"
            />
            <p
              className={`modelo__icons-item-text has-text-weight-bold mt-5 ${
                isOnScreen &&
                'animate__animated animate__fadeInUp animate__delay-1s'
              }`}
            >
              {item.TITULO}
            </p>
          </div>
        )
      })}
    </div>
  )
}

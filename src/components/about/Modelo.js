import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useObserver'
import { Bussines } from './Bussines'
export const Modelo = () => {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  return (
    <div className="modelo" ref={elementRef}>
      <div className="modelo__header is-flex is-justify-content-center is-flex-direction-column has-text-centered">
        <h3
          className={`modelo__header-title is-size-2 is-size-5-mobile has-text-weight-light ${
            isOnScreen && 'animate__animated animate__fadeIn'
          }`}
        >
          MODELO DE NEGOCIO
        </h3>
        <span
          className={`has-text-weight-light ${
            isOnScreen &&
            'animate__animated animate__fadeInUp animate__delay-1s'
          }`}
        >
          entorno fácil de usar, totalmente adaptable a cualquier rubro
        </span>
      </div>
      <Bussines />

      <div
        className={`modelo__padding is-size-4 is-size-6-mobile mb-5 has-text-centered has-text-weight-light ${
          isOnScreen && 'animate__animated animate__fadeInUp animate__delay-1s'
        }`}
      >
        Integramos gestión de una empresa o emprendimiento, en una única base de
        datos en la nube, evitando las duplicidades e inconvenientes al trabajar
        con datos dispersos por departamentos o áreas geográficas.
      </div>
    </div>
  )
}

import React, { useRef } from 'react'
import CountUp from 'react-countup'

import workcore from '../../../assets/workcore__blanco.png'
import data1 from '../../../assets/datos_curiosos/icono_modulos-01.png'
import data2 from '../../../assets/datos_curiosos/icono_cliente-02.png'
import data3 from '../../../assets/datos_curiosos/icono_implementacion-03.png'
import { FaQuoteLeft } from 'react-icons/fa'

import useOnScreen from '../../../hooks/useObserver'

const { CLIENTS, MODULES, IMPLEMENT } = window.CONFIG

export const OtherData = () => {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  return (
    <div
      id="datos"
      className="other__data has-text-light is-flex is-justify-content-space-between"
      ref={elementRef}
    >
      <div className="data__body-item is-flex is-flex-direction-column is-align-items-center">
        <h3
          className={`data__body-item-title has-text-weight-light is-size-3 is-size-4-mobile ${
            isOnScreen && 'animate__animated animate__fadeInUp'
          }`}
        >
          Módulos
        </h3>
        <div className="data__body-item-icom my-3">
          <img
            src={data1}
            alt="Módulos"
            className={`${
              isOnScreen && 'animate__animated animate__fadeInLeft'
            }`}
          />
        </div>
        <div className="data__body-item-num has-text-weight-bold is-size-3 is-size-5-mobile">
          <CountUp delay={1} duration={3} end={MODULES} suffix="+" />
        </div>
      </div>
      <div className="data__body-item is-flex is-flex-direction-column is-align-items-center">
        <h3
          className={`data__body-item-title has-text-weight-light is-size-3 is-size-4-mobile ${
            isOnScreen && 'animate__animated animate__fadeInUp'
          }`}
        >
          Clientes
        </h3>
        <div className="data__body-item-icom my-3">
          <img
            src={data2}
            alt="Módulos"
            className={`${
              isOnScreen && 'animate__animated animate__fadeInLeft'
            }`}
          />
        </div>
        <div className="data__body-item-num has-text-weight-bold is-size-3 is-size-5-mobile">
          <CountUp delay={1} duration={3} end={CLIENTS} suffix="+" />
        </div>
      </div>
      <div className="data__body-item is-flex is-flex-direction-column is-align-items-center">
        <h3
          className={`data__body-item-title has-text-weight-light is-size-3 is-size-4-mobile ${
            isOnScreen && 'animate__animated animate__fadeInUp'
          }`}
        >
          Implementación
        </h3>
        <div className="data__body-item-icom my-3">
          <img
            src={data3}
            alt="Módulos"
            className={`${
              isOnScreen &&
              'animate__animated animate__fadeInLeft animated__delay-1s'
            }`}
          />
        </div>
        <div
          className={`data__body-item-num has-text-weight-bold is-size-3 is-size-5-mobile ${
            isOnScreen &&
            'animate__animated animate__fadeInRight animated__delay-1s'
          }`}
        >
          <CountUp delay={1} duration={3} end={IMPLEMENT} suffix="+" />
        </div>
      </div>
    </div>
  )
}

export const QuoteData = () => {
  const quoteRef = useRef(null)
  const isOnScreen = useOnScreen(quoteRef)
  return (
    <>
      <div
        className="banner__header is-flex is-justify-content-center has-text-centered is-white pb-5 mb-5"
        ref={quoteRef}
      >
        <h2
          className={`banner__header-title wc__titles is-size-3 is-size-6-mobile has-text-weight-light has-text-light wc__titles-white ${
            isOnScreen && 'animate__animated animate__fadeInUp'
          }`}
        >
          <FaQuoteLeft size={24} style={{ color: '#fe5039' }} />
        </h2>
      </div>
      <div className="has-text-centered">
        <div
          className={`is-size-3 is-size-4-mobile has-text-weight-light has-text-light mb-6  ${
            isOnScreen && 'animate__animated animate__fadeInLeft'
          }`}
        >
          Simplifica todos los procesos, de tu organización
        </div>
        <div
          className={`is-flex is-justify-content-center ${
            isOnScreen && 'animate__animated animate__fadeInRight'
          }`}
        >
          <img src={workcore} alt="Workcore" width="200px" />
        </div>
      </div>
    </>
  )
}

export const QuoteAdapt = () => {
  const adaptRef = useRef(null)
  const isOnScreen = useOnScreen(adaptRef)
  return (
    <div ref={adaptRef}>
      <div
        className={`has-text-weight-light is-size-2 is-size-4-mobile has-text-centered has-text-light ${
          isOnScreen && 'animate__animated animate__fadeInDown'
        }`}
      >
        &quot;
        <span className="has-text-weight-bold">
          Nos adaptamos a tu empresa,
        </span>{' '}
        no tu empresa a nosotros &quot;
      </div>
    </div>
  )
}

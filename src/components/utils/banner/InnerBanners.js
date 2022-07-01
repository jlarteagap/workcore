import React from 'react'
import CountUp from 'react-countup'

import workcore from '../../../assets/workcore__blanco.png'
import data1 from '../../../assets/datos_curiosos/icono_modulos-01.png'
import data2 from '../../../assets/datos_curiosos/icono_cliente-02.png'
import data3 from '../../../assets/datos_curiosos/icono_implementacion-03.png'
import { FaQuoteLeft } from 'react-icons/fa'

export const OtherData = () => {
  return (
    <div className="other__data has-text-light is-flex is-justify-content-space-between">
      <div className="data__body-item is-flex is-flex-direction-column is-align-items-center">
        <div className="data__body-item-title has-text-weight-light is-size-3 is-size-4-mobile">
          Módulos
        </div>
        <div className="data__body-item-icom my-3">
          <img src={data1} alt="Módulos" />
        </div>
        <div className="data__body-item-num has-text-weight-bold is-size-3 is-size-5-mobile">
          <CountUp delay={1} duration={3} end={100} suffix="+" />
        </div>
      </div>
      <div className="data__body-item is-flex is-flex-direction-column is-align-items-center">
        <div className="data__body-item-title has-text-weight-light is-size-3 is-size-4-mobile">
          Clientes
        </div>
        <div className="data__body-item-icom my-3">
          <img src={data2} alt="Módulos" />
        </div>
        <div className="data__body-item-num has-text-weight-bold is-size-3 is-size-5-mobile">
          <CountUp delay={1} duration={3} end={100} suffix="+" />
        </div>
      </div>
      <div className="data__body-item is-flex is-flex-direction-column is-align-items-center">
        <div className="data__body-item-title has-text-weight-light is-size-3 is-size-4-mobile">
          Implementación
        </div>
        <div className="data__body-item-icom my-3">
          <img src={data3} alt="Módulos" />
        </div>
        <div className="data__body-item-num has-text-weight-bold is-size-3  is-size-5-mobile">
          <CountUp delay={1} duration={3} end={100} suffix="+" />
        </div>
      </div>
    </div>
  )
}

export const QuoteData = () => {
  return (
    <>
      <div className="banner__header is-flex is-justify-content-center has-text-centered is-white pb-5 mb-5">
        <h2
          className={`banner__header-title wc__titles is-size-3 is-size-6-mobile has-text-weight-light has-text-light wc__titles-white`}
        >
          <FaQuoteLeft size={24} style={{ color: '#fe5039' }} />
        </h2>
      </div>
      <div className="has-text-centered">
        <div className="is-size-3 is-size-4-mobile has-text-weight-light has-text-light mb-6">
          Simplifica todos los procesos, de tu organización
        </div>
        <div className="is-flex is-justify-content-center">
          <img src={workcore} alt="Workcore" />
        </div>
      </div>
    </>
  )
}

export const QuoteAdapt = () => {
  return (
    <>
      <div className="has-text-weight-light is-size-2 is-size-4-mobile has-text-centered has-text-light">
        &quot;
        <span className="has-text-weight-bold">
          Nos adaptamos a tu empresa,
        </span>{' '}
        no tu empresa a nosotros &quot;
      </div>
    </>
  )
}

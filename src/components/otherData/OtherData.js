import React from 'react'
import CountUp from 'react-countup'
import './data.css'
import data1 from '../../assets/datos_curiosos/icono_modulos-01.png'
import data2 from '../../assets/datos_curiosos/icono_cliente-02.png'
import data3 from '../../assets/datos_curiosos/icono_implementacion-03.png'

export default function OtherData() {
  return (
    <section className="data">
      <div className="container">
        <div className="data__header is-flex is-justify-content-center has-text-centered is-white pb-5 mb-5">
          <h2 className="data__header-title wc__titles is-size-3 is-size-6-mobile has-text-weight-light has-text-light">
            ALGUNOS DATOS CURIOSOS
          </h2>
        </div>
        <div className="data__body has-text-light is-flex is-justify-content-space-between m-auto">
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
      </div>
    </section>
  )
}

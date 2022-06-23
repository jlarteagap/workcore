import React from 'react'

import { Bussines } from './Bussines'
export const Modelo = () => {
  return (
    <div className="modelo">
      <div className="modelo__header is-flex is-justify-content-center is-flex-direction-column has-text-centered">
        <h3 className="is-size-3 is-size-5-mobile has-text-weight-light">
          MODELO DE NEGOCIO
        </h3>
        <span className="has-text-weight-light">
          entorno fácil de usar, totalmente adaptable a cualquier rubro
        </span>
      </div>
      <Bussines />

      <div className="modelo__padding is-size-4 is-size-6-mobile mb-5 has-text-centered has-text-weight-light">
        Integramos gestión de una empresa o emprendimiento, en una única base de
        datos en la nube, evitando las duplicidades e inconvenientes al trabajar
        con datos dispersos por departamentos o áreas geográficas.
      </div>
    </div>
  )
}

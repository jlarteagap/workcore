import React, { useEffect, useState } from 'react'
import { getData } from '../../api/Api'

export const Bussines = () => {
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
    <div className="modelo__icons modelo__padding">
      {business.map((item, index) => {
        return (
          <div
            className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center has-text-centered"
            key={index}
          >
            <img
              className="modelo__icons-img"
              src={item.IMAGENES[0].URL}
              alt={item.TITULO}
              loading="lazy"
            />
            <p className="modelo__icons-item-text has-text-weight-bold mt-5">
              {item.TITULO}
            </p>
          </div>
        )
      })}
    </div>
  )
}

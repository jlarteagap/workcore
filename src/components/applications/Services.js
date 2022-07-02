import React, { useEffect } from 'react'
import { getData } from '../../api/Api'
import './applications.css'

export const Services = () => {
  const [services, setServices] = React.useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('productos')
        setServices(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="app__services">
      {services.map((service, index) => {
        return (
          <div className="app__services-item has-text-centered" key={index}>
            <div className="mb-3 is-flex is-justify-content-center">
              <div className="app__services-img p-3">
                <img
                  className="app__services-icon has-text-centered"
                  src={service.FOTO}
                  alt={service.NOMBRE}
                  loading="lazy"
                />
              </div>
            </div>

            <h4 className="app__services-title has-text-weight-bold mb-4">
              {service.NOMBRE}
            </h4>
            <div className="is-size-7 has-text-weight-light">
              <div
                className="app__services-content"
                dangerouslySetInnerHTML={{ __html: service.CONTENIDO }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

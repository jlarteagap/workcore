import React, { useEffect } from 'react'
import { getData } from '../../api/Api'
const style = {
  BackgroundColor: '#fff000',
  ObjectFit: 'contain',
  Height: '48px',
  Width: '100%'
}
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

  console.log(services)
  return (
    <div className="app__services">
      {services.map((service, index) => {
        return (
          <div className="app__services-item has-text-centered" key={index}>
            <div className="mb-3">
              <div className="app__service-icon">
                <img
                  src={service.FOTO}
                  alt={service.NOMBRE}
                  loading="lazy"
                  style={{ style }}
                />
              </div>
            </div>
            <h4 className="app__services-title has-text-weight-bold mb-4">
              {service.NOMBRE}
            </h4>
            <div className="is-size-7 has-text-weight-light">
              <div dangerouslySetInnerHTML={{ __html: service.CONTENIDO }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

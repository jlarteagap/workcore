import React, { useEffect, useRef } from 'react'
import { getData } from '../../api/Api'
import './applications.css'
import useOnScreen from '../../hooks/useObserver'
import useData from '../../hooks/useData'
import Tippy from '@tippyjs/react'

export const Services = () => {
  const { updateSections, sections } = useData()

  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
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

  useEffect(() => {
    if (services.length > 0) {
      updateSections('aplicaciones')
    }
  }, [services])

  return (
    <div className="app__services" ref={elementRef}>
      {services.map((service, index) => {
        return (
          <Tippy
            key={index}
            trigger="click"
            arrow={true}
            placement="bottom"
            className="app__services-content skills-tooltip has-text-centered is-size-7 has-text-weight-light"
            content={
              <div
                dangerouslySetInnerHTML={{ __html: service.CONTENIDO }}
              ></div>
            }
          >
            <div
              className={`app__services-item has-text-centered app__services-item-${index} ${
                isOnScreen && 'animate__animated animate__fadeInUp'
              }
            ${sections.aplicaciones || 'is-hidden'}`}
            >
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
            </div>
          </Tippy>
        )
      })}
    </div>
  )
}

import React, { useRef } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import useData from '../../hooks/useData'
import useOnScreen from '../../hooks/useObserver'

export const Address = () => {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)

  const { empresa } = useData()
  return (
    <div
      className="contact__address is-flex is-justify-content-space-around"
      ref={elementRef}
    >
      <div
        className={`contact__address-data is-flex is-align-items-center is-flex-direction-column has-text-centered ${
          isOnScreen && 'animate__animated animate__fadeInUp'
        }`}
      >
        <a
          href={`https://www.google.com/maps/@${empresa.latitud},${empresa.longitud},15z`}
          target="_blank"
          className="contact__icons is-flex is-justify-content-center is-align-items-center mb-2"
          rel="noreferrer"
        >
          <FaMapMarkerAlt size={32} />
        </a>
        <span>{empresa.domicilio}</span>
      </div>
      <div
        className={`contact__address-data is-flex is-align-items-center is-flex-direction-column has-text-centered ${
          isOnScreen && 'animate__animated animate__fadeInUp'
        }`}
      >
        <a
          href={`mailto:${empresa.email}`}
          target="_blank"
          className="contact__icons is-flex is-justify-content-center is-align-items-center mb-2"
          rel="noreferrer"
        >
          <FaEnvelope size={32} />
        </a>
        <span>{empresa.email}</span>
      </div>
      <div
        className={`contact__address-data is-flex is-align-items-center is-flex-direction-column has-text-centered ${
          isOnScreen && 'animate__animated animate__fadeInUp'
        }`}
      >
        <a
          href={`tel: ${empresa.telefono}`}
          target="_blank"
          className="contact__icons is-flex is-justify-content-center is-align-items-center mb-2"
          rel="noreferrer"
        >
          <FaPhoneAlt size={32} />
        </a>
        <span>{empresa.telefono}</span>
      </div>
    </div>
  )
}

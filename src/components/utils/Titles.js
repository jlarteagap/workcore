import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useObserver'
export const Titles = ({ title, description, white }) => {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  return (
    <div className="is-flex is-justify-content-center">
      <div
        className="about__header is-flex is-justify-content-center has-text-centered is-flex-direction-column pt-5"
        ref={elementRef}
      >
        <h2
          className={`title__header-title wc__titles is-size-3 is-size-6-mobile has-text-weight-light m-auto ${
            white ? 'wc__titles-white has-text-light' : ''
          } ${isOnScreen && 'animate__animated animate__fadeIn'}`}
        >
          {title}
        </h2>
        {description && (
          <span
            className={`mt-5 has-text-centered-mobile ${
              isOnScreen &&
              'animate__animated animate__fadeInUp animate-delay-1s'
            }`}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

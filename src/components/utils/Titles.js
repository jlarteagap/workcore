import React from 'react'

export const Titles = ({ title, description, white }) => {
  return (
    <div className="is-flex is-justify-content-center">
      <div className="about__header is-flex is-justify-content-center has-text-centered is-flex-direction-column">
        <h2
          className={`title__header-title wc__titles is-size-3 is-size-6-mobile has-text-weight-light m-auto  ${
            white ? 'wc__titles-white has-text-light' : ''
          }`}
        >
          {title}
        </h2>
        {description && (
          <span className="mt-5 has-text-centered-mobile">{description}</span>
        )}
      </div>
    </div>
  )
}

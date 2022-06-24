import React from 'react'
export const Banner = ({ title, white, bg, children, overlay }) => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundColor: `${overlay}`
  }
  return (
    <div className="banner" style={style}>
      <div className="container">
        {title && (
          <div className="banner__header is-flex is-justify-content-center has-text-centered is-white pb-5 mb-5">
            <h2
              className={`banner__header-title wc__titles is-size-3 is-size-6-mobile has-text-weight-light has-text-light ${
                white ? 'wc__titles-white' : ''
              }`}
            >
              {title}
            </h2>
          </div>
        )}
        <div className="banner__body m-auto">{children}</div>
      </div>
    </div>
  )
}

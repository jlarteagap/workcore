import React from 'react'
import { Titles } from './Titles'
export const Banner = ({ title, white, bg, children, overlay }) => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundColor: `${overlay}`
  }
  return (
    <div className="banner" style={style}>
      <div className="container">
        {title && <Titles title={title} white={white} />}
        <div className="banner__body m-auto">{children}</div>
      </div>
    </div>
  )
}

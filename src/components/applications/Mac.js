import React, { useRef } from 'react'
import laptop from '../../assets/mac.png'

import useOnScreen from '../../hooks/useObserver'

export const Mac = () => {
  const macRef = useRef(null)

  const isOnScreen = useOnScreen(macRef)
  return (
    <div className="mac__imag" ref={macRef}>
      <div
        className={`mac__imag_top ${
          isOnScreen && 'animate__animated animate__fadeInUp aniamte__delay-1s'
        }`}
      >
        <img src={laptop} alt="laptop" />
      </div>
      <span className="mac__imag-spacer"></span>
    </div>
  )
}

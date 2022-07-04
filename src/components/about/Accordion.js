import React, { useEffect, useState, useRef } from 'react'
import { Collapse } from './Collapse'
import { getData } from '../../api/Api'
import useOnScreen from '../../hooks/useObserver'

export const Accordion = () => {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  const [about, setAbout] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('acercade', 'GENERAL')
        setAbout(res.records.reverse())
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`column ${
        isOnScreen && 'animate__animated animate__fadeInRight'
      }`}
    >
      {about.map((item, index) => {
        return (
          <Collapse key={index} title={item.TITULO} collapsed>
            <div dangerouslySetInnerHTML={{ __html: item.CONTENIDO }} />
          </Collapse>
        )
      })}
    </div>
  )
}

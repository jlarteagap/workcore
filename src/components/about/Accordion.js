import React, { useEffect, useState, useRef } from 'react'
import { Collapse } from './Collapse'
import { getData } from '../../api/Api'
import useOnScreen from '../../hooks/useObserver'
import useData from '../../hooks/useData'

export const Accordion = () => {
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  const [about, setAbout] = useState([])
  const { updateSections } = useData()
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

  useEffect(() => {
    if (about.length > 0) {
      updateSections('workcore')
    }
  })
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

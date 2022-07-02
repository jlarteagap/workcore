import React, { useEffect, useState } from 'react'
import { Collapse } from './Collapse'
import { getData } from '../../api/Api'
export const Accordion = () => {
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
    <div className="column">
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

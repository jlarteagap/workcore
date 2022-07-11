import React, { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { getData } from '../../api/Api'

const options = {
  type: 'loop',
  perPage: 1,
  arrows: false,
  rewind: true,
  pagination: false,
  interval: 4000,
  autoplay: true
}

export const Slide = () => {
  const [slides, setSlides] = React.useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('portada')
        setSlides(res.records.reverse())
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <Splide options={options}>
      {slides.map((slide, index) => {
        return (
          <SplideSlide
            key={index}
            className="is-flex is-flex-direction-column is-align-items-center"
          >
            <img src={slide.URL} alt={slide.ID_FOTO} loading="lazy" />
            <div className="is-flex is-justify-content-center">
              <div
                className="home__title has-text-weight-bold has-text-centered"
                dangerouslySetInnerHTML={{ __html: slide.DESCRIPCION }}
              />
            </div>
          </SplideSlide>
        )
      })}
    </Splide>
  )
}

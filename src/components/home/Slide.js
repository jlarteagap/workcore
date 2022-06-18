import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import img1 from '../../assets/device.png'
import img2 from '../../assets/laptop.png'
const options = {
  type: 'loop',
  perPage: 1,
  arrows: false,
  rewind: true,
  pagination: false,
  interval: 3000,
  autoplay: true
}
export const Slide = () => {
  return (
    <Splide options={options}>
      <SplideSlide>
        <img src={img1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={img2} alt="Image 2" />
      </SplideSlide>
    </Splide>
  )
}

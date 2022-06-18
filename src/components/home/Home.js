import React from 'react'
import { Slide } from './Slide'
import './home.css'

export default function Home() {
  return (
    <div className="home">
      <Slide />
      <div className="is-flex is-justify-content-center">
        <h1 className="home__title has-text-weight-bold has-text-centered">
          Bienvenidos a <br />
          workcore
        </h1>
      </div>
    </div>
  )
}

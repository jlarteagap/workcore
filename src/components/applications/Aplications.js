import React from 'react'
import { Titles } from '../utils/Titles'
import './applications.css'
import { Services } from './Services'

export default function Application() {
  return (
    <section className="applications">
      <div className="container">
        <Titles title="Aplicaciones" />
        <Services />
      </div>
    </section>
  )
}

import React from 'react'
import { Titles } from '../utils/Titles'
import { Address } from './Address'
import './contact.css'
import { ContactForm } from './ContactForm'

export default function Contact() {
  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <Titles
          title="Contactanos"
          description="Puedes ponerte en contacto cuando desees"
        />
        <Address />
        <ContactForm />
      </div>
    </section>
  )
}

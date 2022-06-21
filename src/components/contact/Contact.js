import React from 'react'
import { Address } from './Address'
import './contact.css'
import { ContactForm } from './ContactForm'

export default function Contact() {
  return (
    <section className="contacto">
      <div className="container">
        <div className="contacto__title is-flex is-align-items-center is-flex-direction-column">
          <div className="is-flex is-justify-content-center">
            <h2 className="contacto__title--text wc__titles is-size-3 is-size-6-mobile">
              CONTACTANOS
            </h2>
          </div>
          <span className="contacto__title--underline mt-5 has-text-centered-mobile">
            Puedes ponerte en contacto cuando desees
          </span>
        </div>
        <Address />
        <ContactForm />
      </div>
    </section>
  )
}

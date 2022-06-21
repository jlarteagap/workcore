import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { InputField, TextAreaField } from '../utils/InputsFields'

export const ContactForm = () => {
  const { API_HOST, A, E, UB } = window.CONFIG

  const [status, setStatus] = useState(false)

  const validate = Yup.object({
    nombre: Yup.string().required('Ingrese su nombre por favor'),
    telefono: Yup.string().required('Ingrese su número de teléfono por favor'),
    email: Yup.string()
      .email('El correo no válido')
      .required('Ingrese un correo electrónico por favor'),
    mensaje: Yup.string()
      .min(
        6,
        'Su mensaje es demasiado corto, intente enviar ampliar su mensaje'
      )
      .required('Ingrese un mensaje por favor.')
  })
  return (
    <>
      <div>
        <div className="is-flex is-justify-content-center mb-5">
          <h2 className="contact__form-title--text is-size-3 is-size-6-mobile has-text-centered ">
            DEJA TUS DATOS
          </h2>
        </div>
      </div>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          mensaje: ''
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          const url = `${API_HOST}/contactos/?a=${A}&e=${E}&ub=${UB}`

          fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(values)
          })
            .then(response => response.json())
            .then(data => {
              if (data.message === 'OK') {
                setStatus(!status)
              }
            })
            .then(
              setTimeout(() => {
                setStatus(false)
              }, 5000)
            )
            .then(resetForm())
        }}
      >
        {formik => (
          <div>
            {status && (
              <div className="is-flex is-justify-content-center is-align-items-center">
                <div className="is-flex is-flex-direction-column">
                  <div className="notification is-success is-light">
                    Su mensaje ha sido enviado correctamente.
                  </div>
                  <div className="is-flex is-justify-content-center">
                    <button className="button is-success is-outlined">
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
            {status || (
              <Form>
                <div className="columns">
                  <div className="column">
                    <InputField label="Nombre" type="text" name="nombre" />
                  </div>
                  <div className="column">
                    <InputField label="Email" type="email" name="email" />
                  </div>
                  <div className="column">
                    <InputField label="Teléfono" type="text" name="telefono" />
                  </div>
                </div>

                <TextAreaField label="Deje su mensaje" name="mensaje" />
                <div className="mt-3">
                  <button type="submit" className="button nexo__btn">
                    Enviar mensaje
                  </button>
                </div>
              </Form>
            )}
          </div>
        )}
      </Formik>
    </>
  )
}

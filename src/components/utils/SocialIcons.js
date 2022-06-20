import React from 'react'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter
} from 'react-icons/fa'
import useData from '../../hooks/useData'

export const Social = () => {
  const { empresa } = useData()

  return (
    <div className="footer__brand-social is-flex">
      {empresa.facebook && (
        <a
          href={empresa.facebook}
          className="footer__brand-icon is-flex is-justify-content-center is-align-items-center mr-2"
        >
          <FaFacebookF />
        </a>
      )}
      {empresa.twitter && (
        <a
          href={empresa.twitter}
          className="footer__brand-icon is-flex is-justify-content-center is-align-items-center mr-2"
        >
          <FaTwitter />
        </a>
      )}
      {empresa.linkedin && (
        <a
          href={empresa.linkedin}
          className="footer__brand-icon is-flex is-justify-content-center is-align-items-center mr-2"
        >
          <FaLinkedinIn />
        </a>
      )}
      {empresa.telegram && (
        <a
          href={empresa.telegram}
          className="footer__brand-icon is-flex is-justify-content-center is-align-items-center mr-2"
        >
          <FaTelegramPlane />
        </a>
      )}
    </div>
  )
}

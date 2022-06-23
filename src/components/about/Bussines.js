import React from 'react'
import {
  FaIndustry,
  FaShoppingCart,
  FaBriefcase,
  FaTractor,
  FaBriefcaseMedical,
  FaCalculator,
  FaStoreAlt,
  FaTruck,
  FaBookOpen
} from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'

export const Bussines = () => {
  return (
    <div className="modelo__icons modelo__padding">
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaIndustry fontSize={56} />
        <p className="has-text-weight-bold">Industria</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaShoppingCart fontSize={56} />
        <p className="has-text-weight-bold">Servicio</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaBriefcase fontSize={56} />
        <p className="has-text-weight-bold">Comercio</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaTractor fontSize={56} />
        <p className="has-text-weight-bold">Agricola</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <AiFillSetting fontSize={56} />
        <p className="has-text-weight-bold">Construccion</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaBriefcaseMedical fontSize={56} />
        <p className="has-text-weight-bold">Salud</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaCalculator fontSize={56} />
        <p className="has-text-weight-bold">Contadores</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaStoreAlt fontSize={56} />
        <p className="has-text-weight-bold">Bodegas</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaTruck fontSize={56} />
        <p className="has-text-weight-bold">Logistica</p>
      </div>
      <div className="modelo__icons-items is-flex is-flex-direction-column is-align-items-center">
        <FaBookOpen fontSize={56} />
        <p className="has-text-weight-bold">Editorial</p>
      </div>
    </div>
  )
}

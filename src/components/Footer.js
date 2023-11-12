import React from 'react'
import logo from '../img/logo.png'
import wpp from '../img/svg/wpp.svg'
import mail from '../img/svg/gmail.svg'
import call from '../img/svg/llamada.svg'
import { Link } from 'react-router-dom'
import '../index.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} alt="extreme combat shop logo" className="footer__img" width="200px" height="200px" />
        <ul className="footer__list">
          <li className="footer__text">2023&copy;VAY ADMINISTRACIÓN | All Rigths Reserved</li>
          <li className="footer__text2">Diseño y Desarrollo por <a href="mailto:francooursinoo@gmail.com">Franco Ursino</a></li>
        </ul>
        <div className="footer__icons">
          <Link to="mailto:extremecombatshop@gmail.com">
            <img src={mail} alt="logo gmail" className="footer__icon" />
          </Link>
          <Link to="https://wa.me/+5491222122212?text=Buenas!+me+contacto+desde+la+página+web" target="_blank">
            <img src={wpp} alt="logo whatsapp" className="footer__icon" />
          </Link>
          <Link to="tel:+5491222122212">
            <img src={call} alt="logo telefono" className="footer__icon" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
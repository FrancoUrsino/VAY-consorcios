import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Goals() {
  useEffect(()=> {
    AOS.init({duration: 800})
  }, [])
  return (
    <section className='Goals'>
      <h2 className='Goals__title' data-aos="fade-right">OBJETIVOS</h2>
      <ul className='Goals__container'>
        <li className='Goals__container--item' data-aos="fade-left">- Cumplimiento normas vigentes del nuevo código civil y comercial</li>
        <li className='Goals__container--item' data-aos="fade-right">- Relevamiento del edificio</li>
        <li className='Goals__container--item' data-aos="fade-left">- Atención a reclamos y emergencias</li>
        <li className='Goals__container--item' data-aos="fade-right">- Guardia 24hs los 365 dias del año</li>
        <li className='Goals__container--item' data-aos="fade-left">- Reuniones mensuales en el edifico indicando fecha y hora</li>
        <li className='Goals__container--item' data-aos="fade-right">- Gestión de proveedores cuyas tareas son controladas y supervisadas por nuestro equipo profesional</li>
        <li className='Goals__container--item' data-aos="fade-left">- Gestión clara en el control de expensas, ingresos y egresos</li>
      </ul>
    </section>
  )
}

export default Goals
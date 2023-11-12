import React from 'react'
import '../body.css'
import AboutCard from '../components/About/AboutCard'
import hands from '../img/handsTogether.jpeg'

function About() {
  return (
    <main>
      <div className='About__img'>
        <h2 className="About__title">Acerca de Nosotros</h2>
      </div>
      <div className='About__text'>
        <p className='About__text--1'>Nuestro compromiso es garantizar una gestión transparente, eficiente y responsable, velando por los intereses de los propietarios y buscando el bienestar y armonía en la comunidad consorcial</p>
        <p className='About__text--2'>Cada consorcio cuenta con necesidades específicas, por lo que nos adaptamos a las especificidades de cada comunidad que administramos</p>
        <p className='About__text--3'>Tenemos una atención personalizada y priorizamos la fluidez en la comunicacíon para estableceer una relación cercana y de confianza, que son los pilares fundamentales para una buena gestión</p>
      </div>
      <div className='my-4'>
      <AboutCard img={hands} title={"titulo"} des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque repellendus atque quibusdam soluta quaerat odio sunt nesciunt? Voluptas asperiores fuga quam est temporibus sapiente consectetur vero odit placeat accusamus. Doloribus, itaque libero ratione vel voluptates dolorem officiis incidunt molestias voluptate."}/>
      </div>
      <div className='my-4'>
      <AboutCard img={hands} title={"titulo"} des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque repellendus atque quibusdam soluta quaerat odio sunt nesciunt? Voluptas asperiores fuga quam est temporibus sapiente consectetur vero odit placeat accusamus. Doloribus, itaque libero ratione vel voluptates dolorem officiis incidunt molestias voluptate."}/>
      </div>
    </main>
  )
}

export default About
import React from 'react'
import ServisCard from './ServisCard'
import img from '../../img/liqExpensas.webp'

function Servisabout() {
  return (
    <section className='w-11/12 mx-auto'> 
      <h2 className="ServicesAbout__Title">Lo que hacemos</h2>
      <div className='text-white text-2xl'>
        <p>Nos orientamos a que estés siempre conectado con tu edificio, que puendan participar, colaborar votando desde donde estes.</p>
        <p>Por tal motivo se envían imágenes de trabajos a realizar al inicio y finalización del mismo, para tranquilidad del cliente</p>
        <p>Gracias a nuestra <strong>comunidad</strong> se puede controlar el estado de la cuenta corriente, descargar un cupón de pago, pedir reparaciones y estar notificado las 24hs</p>
        <p>Nuestros clientes tienen servicio ilimitado y directo a la información del consorcio mediante whatsapp</p>
      </div>
      <div className='Card__section mx-auto'>
        <ServisCard img={img} title={"titulo"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, doloribus quo. Maxime nobis hic quidem ex incidunt, quo odit accusantium!"} />
        <ServisCard img={img} title={"titulo"} desc={"lorem ipsum bla bla bla"} />
        <ServisCard img={img} title={"titulo"} desc={"lorem ipsum bla bla bla"} />
        <ServisCard img={img} title={"titulo"} desc={"lorem ipsum bla bla bla"} />
      </div>
    </section>
  )
}

export default Servisabout
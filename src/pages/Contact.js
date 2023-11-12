import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../body.css'
import { Toaster, toast } from 'sonner';


function Contact() {
  const form = useRef();
  const promise = () => new Promise((resolve) => setTimeout(resolve, 800));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bveiao7', 'template_z0zocjf', form.current, 'LxAai0t-_XOQo7c9-')
      .then((result) => {
        form.current.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <main>
      <Toaster richColors/>
      <h2 className='contactUs__title'>CONTACTANOS</h2>
      <div className='contactUsForm__container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contactUs__container">
            <label className='contactUs__label'>Nombre y Apellido</label>
            <input type="text" name="user_name" className='contactUs__input' />
          </div>
          <div className="contactUs__container">
            <label className='contactUs__label'>Email</label>
            <input type="email" name="user_email" className='contactUs__input' />
          </div>
          <div className="contactUs__container">
            <label className='contactUs__label'>Dirección</label>
            <input type="text" name="user_address" className='contactUs__input' />
          </div>
          <div className="contactUs__container">
            <label className='contactUs__label'>Teléfono</label>
            <input type="text" name="user_phone" className='contactUs__input' />
          </div>
          <div className="contactUs__container">
            <label className='contactUs__label'>Mensaje</label>
            <textarea name="message" rows={9} className='contactUs__text' />
          </div>
          <input type="submit" value="Enviar"
            onClick={() => toast.promise(promise, {
              loading: 'Enviando...',
              success: () => {
                return 'Mail enviado correctamente';
              } })} className='contactUs__btn'/>
        </form>
      </div>
    </main>
  )
}

export default Contact

import React from 'react'

export default function ServisCard({ title, desc, img }) {
  return (
    // <article className='ServiceCard'>
    //   <div className='ServiceCard__container'>
    //     <img src={img} alt={title} className='' />
    //     <div className='ServiceCard__container--text'>
    //       <h3>{title}</h3>
    //       <p className='text-lg'>{desc}</p>
    //     </div>
    //   </div>
    // </article>
    <article class="card__sites">
      <img src={img} alt="" className='card__bg'/>
        <div class="card__info--sites">
          <h2 class="card__title--sites">
            {title}
          </h2>
          <p class="card__text--sites">
            {desc}
          </p>
          <a href="http://donzoilo.com.ar/" class="btn__sites">Más info</a>
        </div>
      </article>

  )
}

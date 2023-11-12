import React from 'react'
import '../../body.css'

function AboutCard( {img, title, des}) {
  return (
    <div className='AboutCard__container grid py-2 lg:grid-cols-2 text-slate-300 w-9/12 mx-auto'>
      <div className="AboutCard__container--1 mx-4">
        <img src={img} alt="" className='object-cover' />
      </div>
      <div className="AboutCard__container--2 flex flex-col">
        <h3 className="AboutCard__container--title text-5xl md:text-7xl text-center uppercase pt-3">{title}</h3>
        <p className="AboutCard__container--desc text-lg lg:text-xl xl:text-4xl mt-10 text-center">{des}</p>
      </div>
    </div>
  )
}

export default AboutCard
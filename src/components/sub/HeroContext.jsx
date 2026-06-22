import React from 'react'
import Typewriter from './Typewriter'
import HeroBtn from './HeroBtn'


const HeroContext= () => {
  return (
    <div className='mt-8'>
      <p className="text-cyan-400">
        Hi,I'm
      </p>
      <h1 className="text-5xl md:text-6xl font-bold">Bimal Kumar Murmu</h1>

      <Typewriter/>

      <p className="mt-6 text-slate-400 max-w-xl">
        Passionate about web development and
        continuously learning modern technologies.
      </p>

      <HeroBtn/>

    </div>
  )
}

export default HeroContext
import React from 'react'
import HeroContext from './sub/HeroContext'
import ProfileImg from './sub/Pofileimg'

const Hero = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <HeroContext/>
        <ProfileImg/>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Typewriter = () => {
  return (
    <div className="text-2xl md:text-4xl font-semibold text-cyan-400 mt-4">
      <TypeAnimation sequence={["Computer Science Student",2000,"Frontend Developer",2000,"React Learner",2000,]} speed={50} repeat={Infinity} />
    </div>
  )
}

export default Typewriter
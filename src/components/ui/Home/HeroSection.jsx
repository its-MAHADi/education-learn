import { ArrowRight, CircleCheck } from 'lucide-react'
import React from 'react'
import hero from "../../../assets/hero.png"
// import frame from "../../../assets/frame.png"

function HeroSection() {
  return (
    <div className='grid grid-cols-2 container my-10 bg-base border rounded-md'>
      <div className='mt-10 px-3 space-y-6'>
        <h1 className='text-4xl font-semibold'>Let’s Ignite Your Child’s <br /> <span className='text-secondary'>Love for Learning</span></h1>
        <p>We nuture curiosity, critical thinking and academic achievement through virtual classes, fun activities and games, making learning engaging and accessible.</p>

      <button className='bg-primary text-white rounded-full px-3 py-2 flex items-center gap-2 text-xl'>Get 2 weeks free trial <ArrowRight/> </button>

      <div className=' flex gap-5'>
        <h1 className='flex items-center gap-2'> <CircleCheck className='bg-secondary rounded-full text-white' /> Experienced tutor</h1>
        <h1 className='flex items-center gap-2'> <CircleCheck  className='bg-secondary rounded-full text-white' /> Quality classes</h1>
        <h1 className='flex items-center gap-2'> <CircleCheck  className='bg-secondary rounded-full text-white' /> Affordable prices</h1>
      </div>
        
      </div>
  
      <div className='mt-10 px-20'>
      <img className='w-[100%]' src={hero} alt="" />
      </div>

      <div className='mt-8'>

      </div>

    </div>
  )
}

export default HeroSection

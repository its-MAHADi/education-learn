import React from 'react'
import school from "../../../assets/school.png"
import green from "../../../assets/green.png"
import { ArrowRight } from 'lucide-react'

function ForSchool() {
  return (
    <div className='container grid grid-cols-2 mt-32 gap-28'>
      <div>
        <img className='w-[100%]' src= {school} alt="" />
      </div>

      <div className='mt-16'>
       <img src= {green} alt="" />
      <div className=' mt-3 space-y-5'>
      <h1 className='text-3xl font-semibold'>For <span className='text-secondary'>Schools</span></h1>
       <p> Manage professional development and online tutoring with ease. Our programs improves student outcomes, empower educators and leads to a more effective and inclusive learning environment</p>
       <button className='bg-primary rounded-full text-white flex items-center justify-center gap-2 px-4 py-2'>Learn more <ArrowRight className='w-5'/> </button>
      </div>
      </div>
    </div>
  )
}

export default ForSchool

import React from 'react'
import green from "../../../assets/green.png"
import { ArrowRight } from 'lucide-react'
import parent from "../../../assets/parent.png"

function ForParents() {
  return (
    <div className='container grid grid-cols-2 mt-32 gap-28'>
      <div className='mt-16'>
       <img src={green} alt="" />
       <div className='mt-3 space-y-5'>
        <h1 className='text-3xl font-semibold'>For <span className='text-secondary'>Parents</span></h1>
        <p>As a parent, stay involved in your child's learning journey. Track their progress, view assignments, and receive updates on their achievements. Our platform ensures you're always connected to their educational growth.</p>
        <button className='bg-primary rounded-full text-white flex items-center justify-center gap-2 px-4 py-2'>Learn more <ArrowRight className='w-5'/> </button>
      </div>
      </div>

      <div>
        <img className='w-[100%]' src= {parent} alt="" />
      </div>

    </div>
  )
}

export default ForParents

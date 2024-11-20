import React from 'react'
import learning from "../../../assets/learning.png"
import green from "../../../assets/green.png"
import { ArrowRight } from 'lucide-react'

function LearningRe() {
  return (
    <div className='container grid grid-cols-2 mt-32 gap-28'>
      <div>
       <img className='w-[100%]' src= {learning} alt="" />
      </div>

      <div className='mt-40'>
        <img src= {green} alt="" />
        <div className='mt-3 space-y-5'>
            <h1 className='text-3xl font-semibold'>Learning <span className='text-secondary'>Resources</span></h1>
            <p>Visit our online store for supplies and explore the book shop for textbooks and materials. Everything you need for learning in one place!</p>
            <button className='bg-primary rounded-full text-white flex items-center justify-center gap-2 px-4 py-2'>Learn more <ArrowRight className='w-5'/> </button>
        </div>
      </div>
    </div>
  )
}

export default LearningRe

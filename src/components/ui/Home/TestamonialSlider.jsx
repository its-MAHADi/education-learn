import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import Testamonial from '../../shared/Testamonial'

function TestamonialSlider() {
  return (
    <div className='bg-base py-12 my-12 container'>
      <div className='flex justify-between items-center px-16'>
           <button> <ArrowLeft className='text-primary' /></button>
            <Testamonial />
           <button> <ArrowRight className='text-primary'/></button>
      </div>
    </div>
  )
}

export default TestamonialSlider

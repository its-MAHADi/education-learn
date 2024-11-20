import React from 'react'
import green from "../../../assets/green.png"
import Card from '../../shared/Card'

function TuitionProgram() {
  return (
    <div className='container bg-base py-16 mt-16'>
      <div className='flex items-center justify-center'>
        <img src= {green} alt="" />
      </div>

      <div className='mt-2 flex items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Our Tuition <span className='text-secondary'>Program</span></h1>
      </div>

      <div className='flex items-center justify-center mt-3'>
        <p>Discover what your child can achieve with a brilliant tutor and a curriculum tailored to their individual needs.</p>
      </div>

      <div className='mt-10'>
        <Card/>
      </div>
    </div>
  )
}

export default TuitionProgram

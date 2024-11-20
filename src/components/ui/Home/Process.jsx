import React from 'react'
import green from "../../../assets/green.png"
import process from "../../../assets/process.png"

function Process() {
  return (
    <div className=' items-center container my-12 mt-24 '>
      <div>
     <img src= {green} alt="" />
     <h1 className='text-3xl font-semibold mt-2'>Whatever the Learning Need, We Have the <span className='text-secondary'>Perfect Tutor <br /> for Your Child!</span></h1>
      </div>
      
      <div className='grid grid-cols-3 items-center mt-14'>
        <div className='space-y-20'>
           <div>
           <h1 className=' font-semibold'>Identify Gaps & Learning Needs</h1>
           <p className='mt-2'>The outcome of the assessment places each child on the level they are required to work towards or exceed</p>
           </div>

           <div>
            <h1 className='font-semibold'>Assessment (Baselines)</h1>
            <p className='mt-2'>We use diagnostic tests / assessments to evaluate every child’s current skill level and learning style</p>
           </div>

        </div>

        <div className='flex items-center justify-center'>
            <img className='w-[80%]' src={process} alt="" />
        </div>

        <div className='space-y-20'>
        <div>
            <h1 className='font-semibold'>Learning Plan Creation & Recommendation</h1>
            <p className='mt-2'>Develop a tailored learning plan that aligns with the child’s goals, strengths, and areas for improvement</p>
        </div>

        <div>
            <h1 className='font-semibold'>Match Child to Best Tutor</h1>
            <p className='mt-2'>Tutoring using a child-centered approach we ensure each lesson is educative engaging & fun</p>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Process

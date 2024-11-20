import React from 'react'
import quote from "../../assets/quote.png"
import { Star } from 'lucide-react'
import sir from "../../assets/sir.jpeg"

function Testamonial() {
  return (
    <div>
      <div className=' grid  gap-6 items-center justify-center justify-items-center'>
        <img src= {quote} alt="" />
        <h2 className='text-3xl font-semibold'>A Game Changer for My Child's Learning!</h2>
        <p className='flex items-center justify-between'>We’ve seen incredible progress since using this platform. The <br /> personalized lessons keep my child engaged, and the flexible <br />schedule fits perfectly into our routine. Highly recommended!</p>
        <div className='flex items-center gap-1'>
        <Star className='fill-primary stroke-none w-[24px] h-[22.9px]' />
        <Star className='fill-primary stroke-none w-[24px] h-[22.9px]' />
        <Star className='fill-primary stroke-none w-[24px] h-[22.9px]' />
        <Star className='fill-primary stroke-none w-[24px] h-[22.9px]' />
        <Star className='fill-primary stroke-none w-[24px] h-[22.9px]' />
        </div>
        <div className='flex gap-2 items-center justify-center'>
            <img className='w-[90px] h-[90px] rounded-full' src= {sir} alt="" />
            <h3 className='font-semibold'>Mushfiqur Rahman <br /> <span className='font-normal'>Teacher</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Testamonial

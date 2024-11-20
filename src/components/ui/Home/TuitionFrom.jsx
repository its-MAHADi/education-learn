import React from 'react'
import group from "../../../assets/Group.png"
import { ArrowRight } from 'lucide-react'
import message from "../../../assets/message.png"


function TuitionFrom() {
  return (
   <div className="h-[370px] bg-[url('/background.png')] bg-no-repeat bg-cover bg-center mt-20 text-white relative container">

      <div className="bg-[#FFFFFF30] w-[788px] h-[234px] m-auto rounded-2xl relative top-20">
            <div className="w-[676px] h-[163px] flex justify-between items-center m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="grid gap-5">
            <h2 className="text-[30px] font-bold">Tuition from &#163;114 / month
            </h2>
            <p className="text-xl font-normal">Get expert online tuition for personalized learning</p>
            <div className="w-[258px] h-[49px]">          
            <button className='bg-primary text-white rounded-full px-3 py-2 flex items-center gap-2 text-xl'>Get 2 weeks free trial <ArrowRight/> </button>
            </div>
            </div>

            <img className="w-[111.23px] h-[104.8px]" src={group}alt="" />
            </div>
        </div>

   
   </div>
  )
}

export default TuitionFrom

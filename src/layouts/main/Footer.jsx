import React from 'react'
import logomark from "../../assets/footerlogo.png"
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-base px-16 pt-16 container '>
      <div className='flex items-center justify-between'>
        <img src= {logomark} alt="" />
        </div>

      <div className='mt-5 flex items-center justify-between gap-10 '>
       <div>
       <h1 className='text-secondary text-4xl'>Join The Community</h1>
       <div className='mt-8'>
       <div className='flex items-center gap-4'>
          <input type="text" className="w-[338px] h-[49px] bg-[#52135C1A] border border-[#028A0242] rounded-[20px]" />
          <button className='bg-primary text-white rounded-full px-3 py-2 flex items-center gap-1 text-xl'>Subscribe <ArrowRight/> </button>
        </div>
        <h1 className='mt-2 px-2'>By subscribing you agree to with our Privacy Policy</h1>
       </div>
       </div>

       <div>
          <ul className="list-none grid gap-[16px] text-[#333333]">
          <h3 className="text-[20px] font-semibold text-transparent bg-gradient-to-r from-[#000080] to-[#52135C] bg-clip-text">Quick Share</h3>
          <li>Home</li>
          <li>Online tuition</li>
          <li>Professional development</li>
           <li>Resources</li>
          </ul>
          </div>

          <div>
           <ul className="list-none grid gap-[24px] text-[#333333]">
            <h3 className="text-[20px] font-semibold text-transparent bg-gradient-to-r from-[#000080] to-[#52135C] bg-clip-text">Policy</h3>
           <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
           </ul>
         </div>
     
      </div>

      <div className='flex items-center justify-between border-t  mt-7 border-black'>
        </div> 
        <div className='flex items-center justify-center py-8'>
        <p>© 2024 abcdss. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer

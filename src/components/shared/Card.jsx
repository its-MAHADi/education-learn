import { data } from 'autoprefixer'
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Card() {
    const [items , setitems] = useState([]) 
    useEffect(() => {
        fetch('/fack.json')
        .then(Response => Response.json())
        .then(data => setitems(data.tuition))
    },[])
  return (
    <div className='grid grid-cols-3 px-4'>
      {
        items.map((items,index)=>
        <div key={index} className='hover:bg-primary hover:text-white border border-black rounded-2xl p-4 space-y-3 transition-all duration-300 w-[340px] h-[370px] '>
        <img src={items.image} alt={items.title} />
        <h2 className='text-xl font-bold'> {items.title} </h2>
        <p className='text-lg font-normal'> {items.description} </p>
        <a className='text-lg font-medium flex items-center gap-2' href=""> Learn more <ArrowRight /> </a>
        </div>
        )
      }
    </div>
  )
}

export default Card

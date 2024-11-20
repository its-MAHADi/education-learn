import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-5xl font-bold'>404</h2>
      <h2 className='text-2xl'>Not Found Page</h2>
      <Link href="/home">
      <button className='bg-indigo-500 rounded px-4 py-2 text-white mt-5'>Home</button>
      </Link>
    </div>
  )
}

export default NotFound

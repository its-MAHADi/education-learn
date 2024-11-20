import React from 'react'
import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Auth

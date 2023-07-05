'use client'

import React from 'react'
import {NavBar} from './NavBar'

const Header = () => {

  return (
    <div className="flex justify-between px-6 pt-12 pb-4">
      <div>
        LOGO
      </div>
      <NavBar />
    </div>
  )
}

export default Header
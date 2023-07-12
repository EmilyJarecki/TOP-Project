"use client"

import React from "react"
import {NavBar} from "./NavBar"
import Image from "next/image";
import logo from "../assets/logo.png";


const Header = () => {

  return (
    <div className="flex justify-between px-6 pt-12 pb-4 shadow-xl">
      <div>
        <Image className="w-20" src={logo} alt="makemytestcount.org"></Image>
      Hello World
      </div>
      <NavBar />
    </div>
  )
}

export default Header
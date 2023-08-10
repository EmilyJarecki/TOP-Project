"use client"

import React from "react"
import {NavBar} from "./NavBar"
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";


const Header = () => {

  return (
    <div className="flex justify-between px-6 pt-12 pb-4 bg-white shadow-lg">
      <div>
        <Link href="/"><Image className="w-20" src={logo} alt="makemytestcount.org"></Image></Link>
      </div>
      <NavBar />
    </div>
  )
}

export default Header
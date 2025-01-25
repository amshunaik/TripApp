"use client"

import React, { useEffect } from 'react'
//import Link from 'next/link'
import MeetupList from '../components/meetups/MeetupList'
import dum from './Data'
//import { Suspense } from 'react'
import {Context} from './context/index'
import Homepage from './Home/page'
import { useRouter } from 'next/navigation'

const page = ({children}) => {
  const router=useRouter();

  useEffect(()=>{
    router.push("/Home")
    
  })

  return (
    <Context>
    {children}
      
    </Context>
  )
}

export default page

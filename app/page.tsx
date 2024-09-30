"use client"

import React, { Children, useEffect, useState } from 'react'
import Link from 'next/link'
import MeetupList from '../components/meetups/MeetupList'
import dum from './Data'
import { Suspense } from 'react'
import {Context} from './context/index'
import Homepage from './Home/page'

const page = ({children}) => {
  return (
    <Context>
    {children}
      
    </Context>
  )
}

export default page

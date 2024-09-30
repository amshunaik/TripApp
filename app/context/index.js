" use client"

import React from 'react'
import { createContext, useContext, useState } from 'react';
const MyContext = createContext();

export const Context = ({ children }) => {

    const [name, setname] = useState('initial value');

    
  return (
    <div>
          <MyContext.Provider value={{ name, setname}}>
      {children}
    </MyContext.Provider>
      
    </div>
  )
}

export function useAppContext(){
    return useContext(MyContext);

}
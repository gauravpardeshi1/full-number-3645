import React from 'react'
import {useState} from "react"
import { createContext } from 'react'

export const Authcontext = createContext()


export default function AuthContextProvider({children}) {

  const[isAuth,setisAuth]=useState(false)
 let val=false
  const login=()=>{
    setisAuth(true)
    
}
  const log=()=>{
    setisAuth(true)
  }

  return(
    <Authcontext.Provider  value={{val,login,isAuth,log}}>
    {children}
  </Authcontext.Provider>
  )

    
   
  
}

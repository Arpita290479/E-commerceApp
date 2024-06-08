import React, { useState } from 'react'
import UserContext from './UserContext'
export default function UserContextProvider2({children}){
    let [list,setList]=useState(true)
    let [login,setLogin]=useState('')
  return (
  <UserContext.Provider value={{list,setList,login,setLogin}}>
    {children}
  </UserContext.Provider>
  )
}

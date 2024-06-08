import React from 'react'
import ClientNavbar from './components/client/ClientNavbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider2 from './Context/UserContextProvider2'

export default function ClientApp() {
  return (
   <UserContextProvider2>
     <ClientNavbar/>
     <Outlet/>
   </UserContextProvider2>
   
  )
}

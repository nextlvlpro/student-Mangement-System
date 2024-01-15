import React from 'react'
import { Outlet } from 'react-router-dom'
import TheNavBar from './TheNavBar'

export default function Layout() {
  return (
    <div>
        <TheNavBar/>
        <Outlet/>
    </div>
  )
}

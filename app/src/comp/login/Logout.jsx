import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate('')

    function handleLogout () {
        localStorage.clear('currentUser')
        setUser(null)
        navigate('/')
    }
  return (
    <div className='flex items-center justify-center mt-10'>

        <button className='bg-[#566CD6] px-3 py-2 text-white' onClick={handleLogout}>Logout</button>
        
    </div>
  )
}

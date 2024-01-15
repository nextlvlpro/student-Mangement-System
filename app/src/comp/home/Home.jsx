import { useContext } from 'react'
import Login from '../login/Login'
import frontImg from './data/frontImg.png'
import { UserContext } from '../../UserContext'
import AfterLogin from './AfterLogin'

export default function Home() {
  const { user } = useContext(UserContext)
  return (
    <div className='w-full mt-3 rounded-t-sm overflow-hidden p-3'>
      <div className='flex flex-col sm:flex-row w-full items-center justify-center gap-3'>

        <img src={frontImg} alt="" className='sm:w-[50%] rounded-md' />

        <div className='sm:w-[40%] '>
          {!user && (
            <Login />
          )}
          {!!user && (
            <AfterLogin />

          )}

        </div>
      </div>
      <div>
        <h1 className='font-semibold mt-3'>Over View</h1>
        Schools use student management systems (SMS) to manage all student data. They,re critical to staying organized throughout the school year. Because schools generate a large amount of data and information, student management systems help track, store, maintain, and disseminate it all, safely and securely, to students, staff, and parents.

        And while there are many systems on the market, We are One of the Best.
      </div>
    </div>
  )
}


import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './comp/layout/Layout'
import Home from './comp/home/Home'
import axios from 'axios'
import Login from './comp/login/Login'
import UserContextProvider from './UserContext'
import Logout from './comp/login/Logout'
import StudentsPage from './comp/student/StudentsPage'
import EditStudent from './comp/student/EditStudent'
import AddNewStudent from './comp/student/AddNewStudent'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true


function App() {


  return (

    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/studentspage' element={<StudentsPage />} />
          <Route path='/editstudent/:id' element={<EditStudent />} />
          <Route path='/addnewstudent' element={<AddNewStudent />} />
        </Route>
      </Routes>

    </UserContextProvider>

  )
}

export default App

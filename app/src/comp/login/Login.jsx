import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "../../UserContext"
import { useNavigate } from "react-router-dom"


export default function Login() {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate('')

    function handleLogin(e) {

        e.preventDefault()
        

        axios.post('/user/login', { userId, password }).then(({ data }) => {
            if (data == 'done') {
                localStorage.setItem('currentUser', userId)
                setUser({currentUser:userId})
                alert('login done')
                navigate('/')
            } else {
                alert(data)
            }
        })
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-3 h-full">
            <div className="w-[20%] bg-[#566CD6] h-full flex items-center justify-center text-white p-3 rounded-l-md">
                Login
            </div>
            <div className="flex flex-col p-2 border-2 border-[#566CD6] rounded-md">
                <form className="flex items-center justify-center flex-col p-2">
                    User ID
                    <input type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none" />
                    <br />
                    Password
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none" />


                    <button type="submit"
                        onClick={handleLogin}
                        className="bg-[#566CD6] py-1 px-2 rounded-md mt-2 text-white">Login</button>
                </form>
            </div>
        </div>


    )
}

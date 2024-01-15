import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";


export default function TheNavBar() {
  const {user} = useContext(UserContext)
  return (
    <div className="w-full flex items-center justify-between p-3 bg-[#566CD6] text-white rounded-b-sm">
        <div className="sm:block hidden text-xl font-bold">Student Mangment System</div>
        <div className="sm:hidden block text-xl font-bold">SMS</div>
        <ul className="flex items-center gap-2 font-semibold">
            <Link to={'/'}>Home</Link>
            {!user && (
              <Link to={'/login'}>Login</Link>
            )}
            {!!user && (
              <Link to={'/logout'}>Logout</Link>
            )}
            
            <Link to={'/studentspage'}>Students</Link>
        </ul>
    </div>
  )
}

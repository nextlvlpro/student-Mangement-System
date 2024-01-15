import { Link } from "react-router-dom"
export default function AfterLogin() {


    return (
        <div>
            Welcome to the Student Mangment System <br />
            Go to <Link to={'/studentspage'} className="font-semibold underline">Student List</Link>

        </div>
    )
}

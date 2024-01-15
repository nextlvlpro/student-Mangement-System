import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../UserContext'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function StudentsPage() {
    const { user } = useContext(UserContext)
    const [studentData, setStudentData] = useState(null)
    const [dataChange, setDataChange] = useState(false)

    useEffect(() => {
        setDataChange(false)
        axios.post('/students/allstudents').then(({ data }) => {
            setStudentData(data)
        })
    }, [user, dataChange])

    function handleDelete(studentId) {
        const confirmatin = confirm('Do You Want to Delete This Student?')
        
        if (confirmatin) {
            axios.post('/students/deletestudent', { studentId: studentId }).then(({ data }) => {
                alert('Student Deleted')
                setDataChange(true)
            })
        }

        
    }

    if (!user) {
        return (
            <div>Please Login Before Coming Here</div>
        )
    }

    return (
        <div className='flex items-center justify-center flex-col gap-2 my-5'>
            <h1 className='text-xl font-bold'>Student Data</h1>
           
                <Link to={'/addnewstudent'} className='font-semibold flex items-center justify-center gap-1'>Add New Student <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </Link>
            

            {!!user && studentData?.map((students, i) => (
                <div key={i} className='flex flex-col items-center justify-center border border-gray-500 rounded-md overflow-hidden w-[300px] text-center pb-2'>

                    <div className='bg-blue-500 w-full text-white px-2'>
                        {students.studentName}
                    </div>
                    <div className=' px-2'>
                        Student Id: {students.studentId}
                    </div>
                    <div className=' px-2'>
                        Age: {students.StudentAge}
                    </div>

                    <div className=' px-2'>
                        Mobile Number: {students.StudentMobNum}
                    </div>
                    <div className=' px-2'>
                        Address: {students.StudentAddress}
                    </div>
                    <div className='flex items-center justify-center gap-3 border rounded-md px-2 border-blue-400 py-1'>
                        <Link to={'/editstudent/' + students.studentId}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </Link>
                        <button onClick={(e) => handleDelete(students.studentId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditStudent() {
    const student = useParams()
    const [singleStudentData, setSingleStudentData] = useState(null)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate('')


    useEffect(() => {
        axios.post('/students/singlestudent', student).then(({ data }) => {
            setName(data.studentName)
            setAge(data.StudentAge)
            setNumber(data.StudentMobNum)
            setAddress(data.StudentAddress)
            setSingleStudentData(data)
        })
    }, [])
   

    function handleEdit() {
        const confirmation = confirm('Do You Want to Save Changes?')
        if (confirmation) {
            axios.post('/students/editstudent', {studentId:Number(student.id), studentName:name, StudentAge:age,StudentMobNum:number,StudentAddress:address }).then(({data})=> {
                if(data == 'done') {
                    alert('Saved')
                    navigate('/studentspage')
                } 
            })
        }
        
    }

    return (
        <div>
            <h1 className='text-xl font-bold flex items-center justify-center'>Edit Student</h1> 
            {!!singleStudentData && (
                <>
                    <div className='flex items-center justify-center flex-col gap-1'>

                        Name
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                        Age
                        <input type="text"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                        Number
                        <input type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                        Address
                        <input type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                        <button type="submit"
                            onClick={handleEdit}
                            className="bg-[#566CD6] py-1 px-2 rounded-md mt-2 text-white">Save</button>

                    </div>
                </>

            )}


        </div>
    )
}

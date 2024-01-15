import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddNewStudent() {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate('')

    function handleAdd () {
        axios.post('/students/addstudent', {studentId:Number(id), studentName:name, StudentAge:age,StudentMobNum:number,StudentAddress:address }).then(({data})=> {
            if (data == 'done') {
                alert('New Student Added')
                navigate('/studentspage')

            }
        })
    }

    return (
        <div>
            <h1 className='text-xl font-bold flex items-center justify-center'>Add Student</h1>


            <div className='flex items-center justify-center flex-col gap-1'>

            ID
                <input type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />

                Name
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                Age
                <input type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                Number
                <input type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                Address
                <input type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="text-center p-1 border border-gray-400 focus:border-[#566CD6] outline-none rounded-md" />
                <button type="submit"
                    onClick={handleAdd}
                    className="bg-[#566CD6] py-1 px-2 rounded-md mt-2 text-white">Save</button>

            </div>

        </div>
    )
}

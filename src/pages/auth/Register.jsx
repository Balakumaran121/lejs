import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={""} className='bg-gray-50 flex flex-col gap-5 p-5 w-[30%]'>
                <h1 className='text-3xl font-semibold mb-2'>Register</h1>
                <div className='flex gap-5'>

                    <div className='flex flex-col gap-5  w-1/2'>
                        <label htmlFor="First Name" className='text-xl  font-normal'>First Name</label>
                        <input type="text" className='rounded-full border border-gray-200 text-sm p-2 my-2' />

                    </div>
                    <div className='flex flex-col gap-5 w-1/2'>
                        <label htmlFor="Last Name" className='text-xl font-normal'>Last Name</label>
                        <input type="text" className='rounded-full border border-gray-200 text-sm p-2 my-2' />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="Email" className='text-xl font-normal'>Email</label>
                    <input type="text" className='rounded-full border border-gray-200 text-sm p-2 my-2' />
                </div>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="Passwoord" className='text-xl font-normal'>Password</label>
                    <input type="text" className='rounded-full border border-gray-200  text-sm p-2 my-2' />
                </div>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="Confirm Password" className='text-xl font-normal'>Confirm Password</label>
                    <input type="text" className='rounded-full border border-gray-200 text-sm p-2 my-2' />
                </div>
                <button className='bg-emerald-500 cursor-pointer text-white rounded-full p-2 my-2'>Register</button>
                <div className='flex items-center gap-2'>Already have an account <p className='text-lg font-semibold hover:underline cursor-pointer' onClick={() => navigate("/login")}>Login</p></div>
            </form>
        </div>
    )
}

export default Register

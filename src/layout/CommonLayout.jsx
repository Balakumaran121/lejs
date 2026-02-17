import React, { useState } from 'react'
import { NAV_ITEMS } from '../constants'
import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react';
const CommonLayout = () => {
    const [activeMenu, setActiveMenu] = useState("/order")
    return (
        <div className='flex min-h-screen w-screen'>
            <aside className='w-[10%] bg-emerald-50 p-6'>
                <h1 className='text-emerald-600 text-3xl font-bold mb-4'>Taskify</h1>
                <nav  className='flex flex-col'>
                    {
                        NAV_ITEMS.map((item) => (
                            <Link onClick={()=>setActiveMenu(item.path)} className={`mb-2  rounded-full hover:bg-emerald-100   ${activeMenu.includes(item.path) ? "bg-emerald-200" : "bg-emerald-50"}`
                           
                        }>{item.name}</Link>
                        ))
                    }
                </nav>
            </aside>
            <main className='w-full'>
                <div className='flex justify-end items-center p-6 gap-5 '>
                    <div className='rounded-full w-10 h-10 bg-gray-100 border border-gray-200 grid place-items-center'>
                        <Bell size={20} className='text-red-500'/>
                    </div>
                    <div className='bg-gray-100 rounded-full p-2 border border-gray-200'>Balakumaran</div>
                </div>
                Hi
            </main>

        </div>
    )
}

export default CommonLayout

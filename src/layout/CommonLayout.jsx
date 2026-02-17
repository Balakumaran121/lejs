import React from 'react'
import { NAV_ITEMS } from '../constants'

const CommonLayout = () => {
  return (
    <div className='flex min-h-screen w-screen'>
        <aside className='w-[10%] bg-emerald-50 p-6'>
            <h1 className='text-emerald-600 text-3xl font-bold mb-4'>Taskify</h1>
            <nav>
                {
                    NAV_ITEMS.map((item)=>(
                        <p className='mb-2 '>{item.name}</p>
                    ))
                }
            </nav>
        </aside>
        <main className='w-full'>
            <div className='flex justify-end items-center p-6'>
                <div className='rounded-full w-10 h-10 bg-red-500'></div>
                <div>Balakumaran</div>
            </div>
            Hi
        </main>
      
    </div>
  )
}

export default CommonLayout

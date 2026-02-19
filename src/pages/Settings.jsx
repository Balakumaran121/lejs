import React, { useState } from 'react'
import Pagewrapper from '../components/Pagewrapper';

const Settings = () => {
  const [activeTab,setActiveTab]=useState("profile")
  const tabs=[
    {id:"profile",label:"Profile"},
    {id:"theme",label:"Theme"},
    {id:"color",label:"Color"}
  ]
  return (
    <Pagewrapper>
      <div className='flex border-b border-gray-200'>
        {
          tabs.map((tab)=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-3 py-2 border-b-2 transition-all duration-200 ${activeTab===tab.id?"border-blue-500 text-blue-500":"border-transparent"}`}>
              {tab.label}
            </button>
          ))
        }
      </div>
    </Pagewrapper>
  )
}

export default Settings

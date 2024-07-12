import React from 'react'
import Sidebar from '../Dashboard/Sidebar'

const Settings = () => {
  return (
    <div className='bg-gray-700 h-[calc(100vh-70px)] '>
      <div className='flex flex-row h-full overflow-hidden'>
        <Sidebar />
        <div className="p-4 w-full overflow-y-auto">

          <h1 className='font-semibold text-4xl text-white pb-10 mx-10 my-5' >Your Cart</h1>

        </div>
      </div>
    </div>
  )
}

export default Settings

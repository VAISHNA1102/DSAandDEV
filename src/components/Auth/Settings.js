import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import ChangeProfilePicture from './Settings/ChangeProfilePicture'
import ChangeProfileDetails from './Settings/ChangeProfileDetails'
import ChangePassword from './Settings/ChangePassword'
import DeleteAccount from './Settings/DeleteAccount'

const Settings = () => {
  return (
    <div className='bg-gray-700 h-[calc(100vh-70px)] '>
      <div className='flex flex-row h-full overflow-hidden'>
        <Sidebar />
        <div className="p-4 w-full overflow-y-auto">

          <h1 className='font-semibold text-4xl text-white pb-10 mx-10 my-5' >Edit Profile</h1>

          <ChangeProfilePicture/>
          <ChangeProfileDetails/>
          <ChangePassword/>
          <DeleteAccount/>
        </div>
      </div>
    </div>
  )
}

export default Settings

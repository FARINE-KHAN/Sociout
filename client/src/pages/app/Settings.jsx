import React from 'react'
import Sidebar from '../../components/Sidebar'

const Settings = () => {
  return (
    <div>
      <div className='settings'>
      <div><Sidebar/></div>
      <div className="naviagate">
            <button onClick={() => history.go(-1)}>
              <i className="fa-sharp fa-solid fa-arrow-left"></i>
            </button>
            &nbsp; Go back
          </div>
        <div className='settings-main'>
        <h1>Settings</h1>
        </div>
      </div>
    </div>
  )
}

export default Settings

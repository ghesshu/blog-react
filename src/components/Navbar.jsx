import React from 'react'
import hamicon from '../assets/hamburger.png'
import notif from '../assets/notif.png'
import settings from '../assets/settings.png'
import profile from '../assets/profile.png'


const Navbar = (props) => {
  return (
    <div>
              <nav className='flex w-screen items-center  bg-white shadow-xl p-1'>
            <div className="w-2/5 xl:w-1/5 border-r-2 h-full py-4 text-center">
            <h1 className='font-bold xl:text-xl'>OBOSHIE'S SYSTEM</h1>
            </div>

            <div className="flex justify-between items-center w-full px-4">
            <button onClick={props.hamBtn} className='p-3 hover:shadow-xl rounded-xl transition duration-500 ease-in-out'>
                <img src={hamicon} alt="" className='h-8' />
            </button>

            <div className="flex items-center  ">
            <button>
                <img src={notif} alt="" className='p-3 hover:shadow-xl rounded-xl transition duration-500 ease-in-out' />
            </button>
            <button>
                <img src={settings} alt="" className='p-3 hover:shadow-xl rounded-xl transition duration-500 ease-in-out' />
            </button>
            <button>
                <img src={profile} alt="" className='p-3 hover:shadow-xl rounded-xl transition duration-500 ease-in-out' />
            </button>
            </div>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar

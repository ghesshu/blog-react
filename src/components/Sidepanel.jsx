import React from 'react'
import { useState } from 'react'
import globe from '../assets/globe.png'
import downarr from '../assets/down-arrow.png'
import inven from '../assets/3d-cube.png'
import calen from '../assets/calendar.png'
import help from '../assets/question.png'
import points from '../assets/points.png'


const Sidepanel = () => {
  const [toggle, setToggle] = useState(true)

  const menuOpen = () => {
    setToggle(!toggle)  
  };

  const stuDropDown = () => {

  }
  return (
    <div className='w-full mt-28 px-8 space-y-4'>

      <button className="flex items-center space-x-4 hover:bg-blue-400 w-full p-2 rounded-xl hover:text-white">
        <img src={globe} alt="" className='h-6' />
        <h1>Dashboard</h1>
      </button>

      <div className="flex flex-col space-y- ">
        <button onClick={stuDropDown} className="flex items-center justify-between  hover:bg-blue-400 w-full p-2 rounded-xl hover:text-white  cursor-pointer">
        <div className="flex space-x-4">
        <img src={points} alt="" className='h-6' />
        <h1> Students</h1>
        </div>
        <img src={downarr} alt="" className='h-6' />
        </button>

        {t}
      </div>

      <div className="cur cursor-pointer hover:bg-blue-400 w-full p-2 rounded-xl hover:text-white ">
        <div className="flex items-center justify-between">
        <div className="flex space-x-4">
        <img src={points} alt="" className='h-6' />
        <h1> Stuff</h1>
        </div>
        <img src={downarr} alt="" className='h-6' />
        </div>
      </div>

      <div className="cur cursor-pointer hover:bg-blue-400 w-full p-2 rounded-xl hover:text-white ">
        <div className="flex items-center justify-between">
        <div className="flex space-x-4">
        <img src={points} alt="" className='h-6' />
        <h1> Sales</h1>
        </div>
        <img src={downarr} alt="" className='h-6' />
        </div>
      </div>

      <button className="flex items-center space-x-4 hover:bg-blue-400 w-full p-2 rounded-xl hover:text-white">
        <img src={inven} alt="" className='h-6' />
        <h1>Inventory</h1>
      </button>

      <button className="flex items-center space-x-4 hover:bg-blue-400 w-full p-2 rounded-xl hover:text-white">
        <img src={calen} alt="" className='h-6' />
        <h1>Calender</h1>
      </button>

      <button className="flex items-center space-x-4 hover:bg-blue-400 w-full p-2 rounded-xl hover:text-white">
        <img src={help} alt="" className='h-6' />
        <h1>Help</h1>
      </button>
      
    </div>
  )
}

export default Sidepanel

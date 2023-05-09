import React from 'react'
import hero from '../assets/hero1.png'
import staff from '../assets/staff.png'
import studs from '../assets/studs.png'
import payroll from '../assets/payroll.png'
import items from '../assets/items.png'

const DashboardP = () => {
  return (
    <div className='mt-20 p-4 xl:px-20 py-20'>
<div className="flex flex-col lg:flex-row w-full justify-center lg:items-center lg:space-x-24 space-y-8 lg:space-y-0 px-14 lg:p-0">
    <div className="">
            <div className="flex items-center bg-blue-200 p-6 rounded-lg">

            <div className="">
            <h1 className='font-bold'>Welcome Back Oboshie!</h1>
            <p className='text-slate-500'>You have earned 54% more than last month which is great thing.</p>
            </div>
            <div className=""><img src={hero} alt="" /></div>
            </div>

            <div className="flex w-full justify-between py-4">
            <div className="flex flex-col justify-center items-center bg-purple-300 h-28 w-28 rounded-lg">
                <img src={staff} alt="" />
                <h1 className='font-bold text-purple-900'>Staff</h1>
                <h1 className=' text-purple-900'>10</h1>
            </div>

            <div className="flex flex-col justify-center items-center bg-yellow-200 h-28 w-28 rounded-lg">
                <img src={studs} alt="" />
                <h1 className='font-bold text-yellow-900'>Students</h1>
                <h1 className=' text-yellow-900'>172</h1>
            </div>

            <div className="flex flex-col justify-center items-center bg-green-500 h-28 w-28 rounded-lg">
                <img src={items} alt="" />
                <h1 className='font-bold text-yellow-900'>items</h1>
                <h1 className=' text-yellow-900'>195</h1>
            </div>

            <div className="flex flex-col justify-center items-center bg-green-200 h-28 w-28 rounded-lg">
                <img src={payroll} alt="" />
                <h1 className='font-bold text-green-800'>Payroll</h1>
                <h1 className=' text-green-800'>$30k</h1>
            </div>
            </div>
    </div>

    <div className="space-y-3">
        <h1 className='font-bold text-2xl'>Classes</h1>
        <div className="flex items-center bg-purple-800 text-white px-8 pr-24 py-14 rounded-lg">
            <div className="">
                <h1 className='font-bold text-xl '>Monday & Tuesday</h1>
                <h1 className='font-bold text-xl'>Morning Class</h1>

                <h1 className='font-bold text-2xl mt-14'>14 Students</h1>
            </div>
        </div>
    </div>


</div>
    </div>
  )
}

export default DashboardP

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import hamburger from "../assets/hamburger.png"
import close from "../assets/close.png"

const Navbar = (props) => {
  const [hamClass, setHamClass] = useState('');
  const [closeClass, setCloseClass] = useState('hidden');
  const [listClass, setListClass] = useState('hidden')

  const hamopen = () => {
    setHamClass('hidden')
    setCloseClass ('')
    setListClass('flex')
  }

  const hamClose = () => {
    setHamClass('')
    setCloseClass('hidden')
    setListClass('hidden')
  }
  


    
  return (
    <div className='px-4 shadow-xl fixed w-screen bg-white'>
   <div className="container flex justify-between items-start slg:items-center mx-auto w-full ">
   <div className="flex items-center space-x-4 w-2/6 slg:w-1/2 py-5 smd:p-5 slg:p-0 ">
        <div className="bg-black p-6 rounded-full"></div>
        <h1 className='text-lg font-bold slg:text-xl'>React Blog</h1>
    </div>


    <div className={` ${listClass} flex-col mt-14 slg:mt-0 slg:flex slg:flex-row justify-between w-2/6 items-center slg:w-1/2`}>
    <Link to={`/`} ><h1 className={`border-white px-5 py-6 border-b-4 hover:border-black transition duration-500 ease-in-out ${props.homeC} `}>HOME</h1></Link>
    <Link to={`/about`} ><h1 className={`border-white px-5 py-6 border-b-4 hover:border-black transition duration-500 ease-in-out ${props.aboutC} `}>ABOUT</h1></Link>
    <Link to={`/posts`} ><h1 className={`border-white px-5 py-6 border-b-4 hover:border-black transition duration-500 ease-in-out ${props.postC}`}>POST</h1></Link>
    <Link to={'/contact'}><h1 className={`  ${props.contactC} px-5 py-6 border-b-4  hover:border-black transition duration-500 ease-in-out  border-white `}>CONTACT</h1></Link>
    </div>

    <div className="w-2/6 text-center py-5 smd:p-5 slg:hidden">
    <button onClick={hamopen} className={` ${hamClass} p-2 shadow-xl rounded-lg hover:shadow-2xl transition duration-500 ease-in-out`}>
      <img src={hamburger} alt="" className='h-9' />
    </button>
    <button onClick={hamClose}  className={` ${closeClass} p-2 shadow-xl rounded-full hover:shadow-2xl transition duration-500 ease-in-out `}>
      <img src={close} alt="" className='h-9' />
    </button>
    </div>
   </div>
    </div>
  )
}

export default Navbar

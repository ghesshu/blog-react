import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Sidepanel from './Sidepanel'

const Layout = (props) => {
    const [toggle, setToggle] = useState(true)

    const menuOpen = () => {
      setToggle(!toggle)  
    };
    
  return (
    <div>
    <div className=" z-20 fixed">
        <Navbar hamBtn={menuOpen} />
    </div>

    <div className=" z-10 flex w-screen">
        {toggle && (
                    <div id='spanel' className={`  fixed xl:static bg-white w-2/6 xl:w-1/5 border-r-2 h-screen  `}>
                    <Sidepanel />
                </div>
        )}
        <div className="w-full">
            {props.pageContent}
        </div>
    </div>
  
</div>
  )
}

export default Layout

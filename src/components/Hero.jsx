import React from 'react'
import img from '../assets/img.jpg'

const Hero = (props) => {
  return (
    <div className=" h-[40rem] relative">
        <img src={img} alt="" className="h-full w-screen object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
            <div className="container mx-auto flex flex-col justify-center items-center h-full space-y-8 lg:space-y-8">
                <h1 className='text-white text-center font-extrabold text-4xl slg:text-6xl tracking-wide lg:px-44'>{props.heroHead}</h1>
                <h1 className='text-center text-2xl md:text-3xl text-white font-bold'>{props.subHead}</h1>
                <p className='text-center text-white text-xl md:text-2xl'>{props.heroSub}</p>

            </div>
        </div>
    </div>
  )
}

export default Hero
 
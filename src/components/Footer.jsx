import React from 'react'
import insta from '../assets/instagram.png'
import discord from '../assets/discord.png'
import twitter from '../assets/twitter.png'
import yytube from '../assets/youtube.png'

const Footer = () => {
  return (
    <div>
          <div className="my-8">        
          <div className="flex items-center justify-center my-8 space-x-4">
          <a href="http://twitter.com" className="bg-neutral-600 p-4 rounded-full hover:bg-blue-800">
          <img src={twitter} alt="" className='h-8' />
          </a>
          <a href="http://twitter.com" className="bg-neutral-600 p-4 rounded-full hover:bg-blue-800">
          <img src={discord} alt="" className='h-8' />
          </a>
          <a href="http://twitter.com" className="bg-neutral-600 p-4 rounded-full hover:bg-blue-800">
          <img src={insta} alt="" className='h-8' />
          </a>
          <a href="http://twitter.com" className="bg-neutral-600 p-4 rounded-full hover:bg-blue-800">
          <img src={yytube} alt="" className='h-8' />
          </a>

          
        </div>

        <div className="text-center"><h1>Copyright © Start React Blog 2021</h1></div>
        </div>

    </div>
  )
}

export default Footer

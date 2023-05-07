import React from 'react'
import Hero from '../components/Hero'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'

const Root = () => {
  const location = useLocation();
  const [border, setBorder] = useState('border-white')

  useEffect(() => {
    if (location.pathname === '/') {
      setBorder('border-black');
    }
  }, [location.pathname]);


  
  return (
    <div className="">


      {/* NAVBAR CODE */}
      <div className="w-screen z-10 relative">
        <Navbar homeC={border} />
      </div>

      <div className="z-0 ">
        <Hero 
        heroHead='Clean Blog' 
        heroSub='A Blog Theme by Start Bootstrap' />
      </div>
  

      <div className="container mt-20 mx-auto space-y-6">
        <BlogPosts 
        postHead='Man must explore, and this is exploration at its greatest' 
        postSubHead='Problems look mighty small from 150 miles up' 
        postSubText='Posted by Start Bootstrap on January 31, 2020 · 4 mins read' />
        <BlogPosts 
        postHead='Man must explore, and this is exploration at its greatest' 
        postSubHead='Problems look mighty small from 150 miles up' 
        postSubText='Posted by Start Bootstrap on January 31, 2020 · 4 mins read' />
        <BlogPosts 
        postHead='Man must explore, and this is exploration at its greatest' 
        postSubHead='Problems look mighty small from 150 miles up' 
        postSubText='Posted by Start Bootstrap on January 31, 2020 · 4 mins read' />
        <BlogPosts 
        postHead='Man must explore, and this is exploration at its greatest' 
        postSubHead='Problems look mighty small from 150 miles up' 
        postSubText='Posted by Start Bootstrap on January 31, 2020 · 4 mins read' />
        <BlogPosts 
        postHead='Man must explore, and this is exploration at its greatest' 
        postSubHead='Problems look mighty small from 150 miles up' 
        postSubText='Posted by Start Bootstrap on January 31, 2020 · 4 mins read' />
      </div>

      <div className="container my-8 ">
        <div className="flex justify-end">
          <button href="#" className='bg-blue-700 text-white px-12 py-5 hover:bg-blue-800'>VIEW ALL POST</button>
        </div>



      </div>

      <div className="border-t-2 container mx-auto">
      <Footer />
      </div>
    </div>
  )
}

export default Root

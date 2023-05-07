import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'

const Posts = (props) => {
  const location = useLocation();
  const [border, setBorder] = useState('border-white border-b-4 ')

  useEffect(() => {
    if (location.pathname === '/posts') {
      setBorder('bg-black text-white');
    }
  }, [location.pathname]);
  


  return (
    <div>
      <div className="w-screen z-10 relative">
        <Navbar postsC={border} />
      </div>

      <div className="z-0 ">
        <Hero 
        heroHead='POSTS' 
        // heroSub='A Blog Theme by Start Bootstrap'
         />
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

      <div className="border-t-2 container mx-auto">
      <Footer />
      </div>
      
    </div>
  )
}

export default Posts

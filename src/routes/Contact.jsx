import React from 'react'
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const location = useLocation();
  const [border, setBorder] = useState('border-white')

  useEffect(() => {
    if (location.pathname === '/contact') {
      setBorder('border-black');
    }
  }, [location.pathname]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
  };

  return (
    <div>
      <div className="w-screen z-10 relative">
      <Navbar contactC={border} />
      </div>

      <div className="z-0">
      <Hero 
        heroHead='Contact Me' 
        heroSub='Have questions? I have answers.' 
      /> 
      </div>


      <div className="container mx-auto md:p-8 my-14 space-y-6">
        <h1 className='text-center text-lg md:text-2xl'>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</h1>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col space-y-16">
      <div className="flex space-x-4 justify-between">
      <input
        className='border-b-2 border-slate-700 w-1/2 bg-transparent outline-0 py-4'
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
       className='border-b-2 border-slate-700 w-1/2 bg-transparent outline-0 py-4'
        type="email"
        placeholder="Your Email"
        value={email}
        
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <input
       className='border-b-2 border-slate-700 bg-transparent outline-0 py-4'
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
       className='border-b-2 border-slate-700 bg-transparent outline-0 rounded-none'
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <button type="submit" className='bg-black text-white  w-52 p-4 flex space-'></button> */}
      <button className='flex items-center justify-center space-x-6 bg-blue-600 hover:bg-blue-800 py-4 px-3 w-52'>
                <p className='font-bold text-white' >Submit</p>
            </button>
      </div>
    </form>
      </div>


      <div className="border-t-2 container mx-auto mt-14">
      <Footer />
      </div>
      
    </div>
  )
}

export default Contact

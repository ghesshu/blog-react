import React from 'react'
import { useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)

  return (
  <div className="">

      <div className="w-screen z-10 relative">
      <Navbar />
      </div>

       <div className="h-screen flex flex-col justify-between">
       <div className="mt-44">

<div className={ParentDiv}>
<h1 className={Head}>Oops!</h1>
<p className={Ptag}>404 Page Not Found</p>
<p>
  <i>{ error.statusText || error.message }</i>
</p>
</div>
</div>

<div className="border-t-2 container mx-auto mt-14">
<Footer />
</div>
       </div>
  </div>
  )
}

const ParentDiv = 'flex flex-col space-y-3 justify-center items-center w-screen ';
const Head  = 'text-6xl font-bold';
const Ptag = 'text-4xl';
 
export default ErrorPage

import React from 'react'
import { Link } from 'react-router-dom'

const BlogPosts = (props) => {
  return (
    <div className='flex  justify-center '>
<div className="space-y-4 border-b-2  smd:p-8">
    <Link to={`/posts/1`}>
    <button href="#" className='flex flex-col space-y-4 hover:text-blue-600'>
     <h1 className='text-2xl font-extrabold smd:text-3xl text-left'>{props.postHead}</h1>
      <h1 className='text-left text-xl smd:text-2xl font-bold'>{props.postSubHead}</h1>
     </button>
    </Link>

      <p className=' text-base smd:text-xl'>{props.postSubText}</p>  
</div>
    </div>
  )
}

export default BlogPosts

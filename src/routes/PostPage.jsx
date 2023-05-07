import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import img from '../assets/img.jpg'


const PostPage = () => {


    

  return (
    <div>
    <div className="w-screen z-10 relative">
        <Navbar />
    </div>

    <div className="z-0">
      <Hero 
        heroHead='Man must explore, and this is exploration at its greatest' 
        subHead = 'Problems look mighty small from 150 miles up'
        heroSub='Posted by Start Bootstrap on January 31, 2020 · 4 mins read' 
      /> 
    </div>

    <div className="container mt-20 mx-auto space-y-6 text-lg lg:text-2xl p-8 max-w-4xl">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quisquam ut perspiciatis, repudiandae nulla animi iste vel, praesentium repellendus molestias aliquid consequatur, earum rem qui error voluptates eius enim consequuntur!</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex alias, earum consectetur quia natus ducimus voluptate explicabo, hic porro reprehenderit, quasi? Tenetur ipsum distinctio laboriosam perspiciatis officiis dolore, architecto id.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam inventore aspernatur repellendus incidunt adipisci modi voluptates recusandae iste eligendi, repudiandae corporis quod aut, optio! Explicabo quaerat unde voluptatem! Itaque, eum!</p>


        <h1 className='font-bold text-6xl'>Lorem ipsum dolor sit amet</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quisquam ut perspiciatis, repudiandae nulla animi iste vel, praesentium repellendus molestias aliquid consequatur, earum rem qui error voluptates eius enim consequuntur!</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex alias, earum consectetur quia natus ducimus voluptate explicabo, hic porro reprehenderit, quasi? Tenetur ipsum distinctio laboriosam perspiciatis officiis dolore, architecto id.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam inventore aspernatur repellendus incidunt adipisci modi voluptates recusandae iste eligendi, repudiandae corporis quod aut, optio! Explicabo quaerat unde voluptatem! Itaque, eum!</p>

        <img src={img} alt="" />

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex alias, earum consectetur quia natus ducimus voluptate explicabo, hic porro reprehenderit, quasi? Tenetur ipsum distinctio laboriosam perspiciatis officiis dolore, architecto id.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam inventore aspernatur repellendus incidunt adipisci modi voluptates recusandae iste eligendi, repudiandae corporis quod aut, optio! Explicabo quaerat unde voluptatem! Itaque, eum!</p>
      </div>

      <div className="border-t-2 container mx-auto mt-14">
      <Footer />
      </div>
      
    </div>
  )
}

export default PostPage

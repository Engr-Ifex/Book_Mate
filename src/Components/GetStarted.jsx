import React from 'react'
import { Link } from 'react-router-dom'
import getstarted from './Images/getstarted.png'

const GetStarted = () => {
  return (
    <div>
      <div className='bg-gs h-screen bg-cover flex flex-col justify-center items-center  '>
          <div>
            <img src={getstarted} alt="img" className='w-[350px]' />
          </div>
          <div className='w-[380px]'>
            <h1 className='text-4xl text-center font-body font-bold mt-10'>Your Book Library Make Your Own Space</h1>
            <p className='text-center font-body mt-5 '>Read the best trending books here & manage your ebooks in your space. </p>
          </div>
          <div>
            <Link to='/signup'>
            <button className='bg-[#FF8E2B] text-white px-32 py-4 text-xl font-body rounded-lg mt-20'>Get Started</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default GetStarted
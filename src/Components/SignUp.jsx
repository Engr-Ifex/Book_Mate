import React from 'react'
import logo from './Images/logo.png'
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
const SignUp = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='mb-10'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <h1 className='text-[#193A6F] font-secondary font-bold text-2xl'>Sign In/Sign Up</h1>
                <button className='flex items-center bg-white shadow-lg px-16 py-5 gap-5 mt-5 rounded-full'>
                    <FcGoogle className='text-2xl' />
                    <h1  className='text-[#193A6F] font-secondary font-bold text-xl'>Sign Up with Google</h1>
                </button>
                <button className='flex items-center bg-white shadow-lg px-16 py-5 gap-5 mt-5 rounded-full'>
                    <SiApple className='text-2xl' />
                    <h1  className='text-[#193A6F] font-secondary font-bold text-xl'>Sign Up with Apple</h1>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SignUp
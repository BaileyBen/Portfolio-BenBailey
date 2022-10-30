import React from 'react'
import { DiDatabase, DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiCsharp } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

const ContactPage = () => {
  return (
    <div>
        <div className='max-w-[1000px] mx-auto px-20 py-20'>
        <div className='flex justify-center'>
        <h1 className='text-white text-5xl font-bold pt-20'><span className='text-blue-600 text-5xl font-bold '>// </span>Contact Me</h1>
        </div>
        <div className='pl-20 ml-20 text-white pt-20 hover:text-blue-600 cursor-pointer transform transition duration-500 hover:scale-110'>
            <div className='flex'>
            <BsLinkedin size={60} />
            <h1 className='pt-2 pl-3 text-3xl'>Linked In</h1>
            </div>
        </div>
        <div className='pl-20 ml-20 text-white pt-20 hover:text-blue-600'>
        <div className='flex '>
            <TfiEmail size={60} />
            <h1 className='pt-4 pl-3 text-3xl'>bensirbailey@hotmail.com</h1>
            </div>
            </div>
        </div>

        <div className='fixed top-0 left-0 w-[60px] h-screen bg-black/10 z-10 duration-300 invisible lg:visible hover:bg-black/30 transform transition duration-500 hover:scale-110 '>
            <div className='text-white/50 hover:text-blue-600 pl-2 pt-10'>
            <DiDatabase size={40} />
              <p className='pl-2'>SQL</p>
            <DiCss3 size={40} className='mt-20'/>
            <p className='pl-2'>CSS</p>
            
            <SiCsharp size={40} className='mt-20'/>
            <p className=''>CSharp</p>
            
            <DiHtml5 size={40} className='mt-20' />
            <p className=''>HTML</p>

            <DiNodejsSmall size={40} className='mt-20' />
            <p className=''>JScript</p>

            <DiReact size={40} className='mt-20' />
            <p className=''>React</p>

            <FaNpm size={40} className='mt-20' />
            <p className=''>NPM</p>
            </div>
            </div>
    </div>
  )
}

export default ContactPage
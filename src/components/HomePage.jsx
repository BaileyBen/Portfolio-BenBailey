import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { DiDatabase, DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import {SiCsharp} from 'react-icons/si'
import {FaNpm} from 'react-icons/fa'

const HomePage = () => {
  return (
    <div>
        <div className='max-w-[1000px] mx-auto px-20 py-20 mt-10 flex flex-col justify-center h-full'>
            <h1 className='text-blue-600 font-semi-bold text-3xl'>Hi my name Is </h1>
            <h1 className='text-gray-200 font-bold text-6xl ml-20'>Benjamin Bailey</h1>
            <h1 className='text-gray-200/60 font-bold text-5xl pl-20 ml-20 pt-2'>I'm a Full Stack Developer</h1>
            <p className='text-gray-200/40 font-bold text-2xl pl-20 ml-20 pt-5'>Full of ambition with a passion for programming,
            I stay goal driven to provide top tier business solutions and user experiences . . </p>
            <p className='text-gray-200/50 font-bold text-2xl pl-20 ml-5 pt-5'><span className='text-blue-600 text-3xl'>// </span>
            Welcome to my Portfolio</p>

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
    </div>
  )
}

export default HomePage
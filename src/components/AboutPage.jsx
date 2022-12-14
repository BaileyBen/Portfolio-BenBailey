import React from 'react'
import selfie from './assets/me1.jpg'
import { DiDatabase, DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import {SiCsharp} from 'react-icons/si'
import {FaNpm} from 'react-icons/fa'

const AboutPage = () => {
  return (
    <div>

        <div className='max-w-[1000px] mx-auto px-20 py-20'>

            <div className='flex justify-center'>
        <img className='rounded-full transform transition duration-500 hover:rotate-6 hover:text-blue-600 w-[300px] h-[350px]' src={selfie} alt='' />
            </div>

            <div className='flex justify-center'>
        <h1 className='text-white font-bold text-5xl  pt-5'><span className='text-blue-600 text-5xl '>// </span>About Me</h1>
            </div>

            <div>
                <h1 className='text-white text-4xl pt-20 font-bold'><span className='text-blue-600'>-</span>Hobbies<span className='text-blue-600'>-</span></h1>
                <p className='text-white pt-5 text-xl'>Some of my favorite activities include Programming, Camping, Off-Roading and hitting the Gym. </p>
            </div>

            <div>
                <h1 className='text-white text-4xl pt-20 font-bold'><span className='text-blue-600'>-</span>Interests<span className='text-blue-600'>-</span></h1>
                <p className='text-white pt-5 text-xl'>Love keeping up with the latest and greatest technology </p>
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

export default AboutPage
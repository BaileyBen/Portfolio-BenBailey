import React, {useState} from 'react'
import { HiMenu } from "react-icons/hi";
import {  AiOutlineClose } from 'react-icons/ai';
import selfie from './assets/me1.jpg'
import { DiDatabase, DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import {SiCsharp} from 'react-icons/si'
import {FaNpm} from 'react-icons/fa'
import { Link, useNavigate} from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false)

  return (
    <div>
        <div className='max-auto p-4 bg-black/5'>

        <div className='md:hidden flex flex-row justify-between'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <HiMenu className='text-white transform transition duration-500 hover:scale-110 hover:rotate-6 hover:text-blue-600' size={40}/>
            </div>
            <div className='bg-gray-200/10 rounded-full text-white shadow-xl p-1'>
            <h1 className='mr-20 text-3xl font-bold bg-gray-200/20 rounded-full px-5 text-white shadow-xl '>
                P<span className='hover:text-blue-600'>o</span>rtf<span className='hover:text-blue-600'>o</span>li<span className='hover:text-blue-600'>o</span></h1>
            </div>
        </div>
            <div className='font-bold text-2xl sm:text-3xl lg:text-4xl invisible md:visible'>
           <ul className='flex flex-row justify-center p-4 gap-x-10 py-5 '>
            <Link to="/about">
            <li className='ml-10 lg:ml-20 bg-gray-200/10 rounded-full px-5 shadow-xl p-1 pl-5'>
                <button className='bg-gray-200/20 rounded-full px-5 text-white/90 shadow-xl p-1
                transform transition duration-500 hover:scale-90 hover:text-blue-600 hover:bg-black/30'>About</button>
            </li>
            </Link>
            <li className='bg-gray-200/10 rounded-full px-5 shadow-xl p-1'>
                <button className='bg-gray-200/20 rounded-full px-5 text-white/90 shadow-xl p-1
                transform transition duration-500 hover:scale-90 hover:text-blue-600 hover:bg-black/30'>Contact</button>
            </li>
            <Link to="/projects">
            <li className=' bg-gray-200/10 rounded-full px-5 shadow-xl p-1'>
                <button className='bg-gray-200/20 rounded-full px-5 text-white/90 shadow-xl p-1
                transform transition duration-500 hover:scale-90 hover:text-blue-600 hover:bg-black/30'>Projects</button>
            </li>
            </Link>
            <li className='mr-10 lg:mr-20 bg-gray-200/10 rounded-full px-5 shadow-xl p-1 pr-5'>
                <button className='bg-gray-200/20 rounded-full px-5 text-white/90 shadow-xl p-1
                transform transition duration-500 hover:scale-90 hover:text-blue-600 hover:bg-black/30'>Skills</button>
            </li>
           </ul>
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

        {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 md:hidden'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-gray-200/20 z-10 duration-300 md:hidden' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 sm:hidden' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className=' text-white absolute right-4 top-4 cursor-pointer
          transform transition duration-500 hover:scale-110 hover:rotate-6 hover:text-blue-600'
        />
        <div className='py-20'>

        <ul className='flex flex-col p-7'>

            <li className='text-2xl font-bold py-4 flex 
            hover:bg-gray-200/20 rounded-full px-5 text-white shadow-xl p-1'>
                <button className='bg-black/80 text-white w-full rounded-full p-1 shadow-xl
                transform transition duration-500 hover:scale-90 hover:text-blue-600'>Home</button>
            </li>

            <Link to="/about">
            <li className='text-2xl font-bold py-4 mt-8 flex
             hover:bg-gray-200/20 rounded-full px-5 text-white shadow-xl p-1'>
                <button className='bg-black/80 text-white w-full rounded-full p-1 shadow-xl
                transform transition duration-500 hover:scale-90 hover:text-blue-600'>About</button>
            </li>
            </Link>
            
            <Link to="/projects">
            <li className='text-2xl font-bold py-4 mt-8 flex
            hover:bg-gray-200/20 rounded-full px-5 text-white shadow-xl p-1'>
                <button className='bg-black/80 text-white w-full rounded-full p-1 shadow-xl
                transform transition duration-500 hover:scale-90 hover:text-blue-600'>Projects</button>
            </li>
            </Link>

            <li className='text-2xl font-bold py-4 mt-8 flex
            hover:bg-gray-200/20 rounded-full px-5 text-white shadow-xl p-1'>
                <button className='bg-black/80 text-white w-full rounded-full p-1 shadow-xl
                transform transition duration-500 hover:scale-90 hover:text-blue-600'>Contact</button>
            </li>

           </ul>

           <div className='py-20 hover:bg-gray-200/20 rounded-full px-2 text-white shadow-xl'>
            <img className='rounded-full transform transition duration-500 hover:rotate-6 hover:text-blue-600' src={selfie} alt='' />
           </div>
           
        </div>
        </div>

    </div>
  )
}

export default Navbar
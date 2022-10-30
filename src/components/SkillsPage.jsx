import React from 'react'
import { DiDatabase, DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import {SiCsharp} from 'react-icons/si'
import {FaNpm} from 'react-icons/fa'

const SkillsPage = () => {
  return (
    <div>
        <div className='max-w-[1000px] mx-auto px-20 py-20'>
            <div className='flex justify-center'>
        <h1 className='text-white text-5xl font-bold'><span className='text-blue-600 text-5xl font-bold '>// </span>Tech Stack</h1>
        </div>
        <div className=''>
        <div className='text-white text-xl lg:flex flex-row justify-center gap-20  sm:grid grid-cols-3
        transform transition duration-500 hover:scale-110'>
            
            <div>
        <DiDatabase size={100} className='mt-20 hover:text-blue-600' />
              <p className='pl-9 hover:text-blue-600'>SQL</p>
              </div>

            <div>
            <DiCss3 size={100} className='mt-20 hover:text-blue-600'/>
            <p className='pl-9 hover:text-blue-600'>CSS</p>
            </div>

            <div>
            <SiCsharp size={95} className='mt-20 hover:text-blue-600'/>
            <p className='pl-6 pt-2 hover:text-blue-600'>CSharp</p>
            </div>

            <div>
            <DiHtml5 size={100} className='mt-20 hover:text-blue-600' />
            <p className='pl-7 pt-1 hover:text-blue-600'>HTML</p>
            </div>

            <div>
            <DiNodejsSmall size={100} className='mt-20 hover:text-blue-600' />
            <p className='pl-6 hover:text-blue-600'>JScript</p>
            </div>

            <div>
            <DiReact size={100} className='mt-20 hover:text-blue-600' />
            <p className='pl-8 hover:text-blue-600'>React</p>
            </div>

            <div>
            <FaNpm size={100} className='mt-20 hover:text-blue-600' />
            <p className='pl-8 hover:text-blue-600f'>NPM</p>
            </div>
        </div>
        </div>

        <div className='flex justify-center'>
        <h1 className='text-white text-5xl font-bold pt-20 pb-10'><span className='text-blue-600 text-5xl font-bold '>// </span>Relative Skills</h1>
        </div>

        <div>
        <ul className='text-white text-2xl pl-20 list-disc pt-3 md:grid grid-cols-3 gap-20 lg:grid grid-cols-3 gap-20
        bg-gray-300/5 rounded-lg mt-10 pb-5 shadow-xl hover:bg-black/30 transform transition duration-500 hover:scale-110'>
                <li>
                <p className='text-white pt-1 '>ASP.Net Web Api</p>
                </li>

                <li>
                <p className='text-white pt-1 '>Entity Framework</p>
                </li>

                <li>
                <p className='text-white pt-1 '>JavaScript</p>
                </li>

                <li>
                <p className='text-white pt-1 '>TypeScript</p>
                </li>

                <li>
                <p className='text-white pt-1 '>Tailwind CSS</p>
                </li>

                <li>
                <p className='text-white pt-1 '>Git</p>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default SkillsPage
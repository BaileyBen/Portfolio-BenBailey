import React from 'react'
import { DiDatabase, DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import {SiCsharp} from 'react-icons/si'
import {FaNpm} from 'react-icons/fa'

const ProjectsPage = () => {
  return (
    <div>
        <div className=' max-w-[1000px] mx-auto px-20 py-20'>
            <div>
            <h1 className='text-white text-5xl font-bold'><span className='text-blue-600 text-5xl font-bold '>// </span>ASP.Net Core Web API's</h1>

            <div className='bg-gray-300/5 rounded-lg mt-10 pl-10 pb-5 shadow-xl hover:bg-black/30 transform transition duration-500 hover:scale-110'>
            <h1 className='text-white text-3xl pt-10 font-bold'><span className='text-blue-600'>-</span>Real<span className='text-blue-600'>-</span>Estate<span className='text-blue-600'>-</span>API<span className='text-blue-600'>-</span></h1>
            <ul className='text-white list-disc pt-3'>
                <li>
                <p className='text-white pt-1 text-xl'>Login Role based Authentication, Authorization with JWT Tokens and Fluent API Validation</p>
                </li>
            </ul>
            <p className='text-white pt-4 pb-3 text-lg'>A Web API for House sale listings, CRUD operations for the houses, regions they reside and the the type of overall landscape of the area.</p>
            <a className='text-blue-600 text-2xl hover:text-blue-500 transform transition duration-500 ' href="https://github.com/BaileyBen/Real-Estate-API#readme" rel="noreferrer">
                View Here
            </a>
            </div>

            <div className='bg-gray-300/5 rounded-lg mt-10 pl-10 pb-5 shadow-xl hover:bg-black/30 transform transition duration-500 hover:scale-110'>
            <h1 className='text-white text-3xl pt-10 font-bold'><span className='text-blue-600'>-</span>Walk<span className='text-blue-600'>-</span>Tracks<span className='text-blue-600'>-</span>API<span className='text-blue-600'>-</span></h1>
            <ul className='text-white list-disc pt-3'>
                <li>
                <p className='text-white pt-1 text-xl'>Login Role based Authentication, Authorization with JWT Tokens and Fluent API Validation</p>
                </li>
            </ul>
            <p className='text-white pt-4 pb-3 text-lg'>An API for walking tracks, their region and difficulty rating, regions include longitude, latitude and population, CRUD operations for the Tracks, Regions and Difficulty.</p>
            <a className='text-blue-600 text-2xl hover:text-blue-500 transform transition duration-500' href="https://github.com/BaileyBen/Real-Estate-API" rel="noreferrer">
                View Here
            </a>
            </div>
            </div>

            <div>
            <h1 className='text-white text-5xl pt-20 font-bold'><span className='text-blue-600 text-5xl font-bold '>// </span>ReactJS Web Applications</h1>

            <div className='bg-gray-300/5 rounded-lg mt-10 pl-10 pb-5 shadow-xl hover:bg-black/30 transform transition duration-500 hover:scale-110'>
            <h1 className='text-white text-3xl pt-10 font-bold'><span className='text-blue-600'>-</span>Crypto<span className='text-blue-600'>-</span>Currency<span className='text-blue-600'>-</span>Tracker<span className='text-blue-600'>-</span></h1>
            <ul className='text-white list-disc pt-3'>
                <li>
                <p className='text-white pt-1 text-xl'>Mobile Responsive</p>
                </li>
            </ul>
            <p className='text-white pt-4 pb-3 text-lg'>Real-time data from Coin-Gecko API, backend database for login, register and adding to watchlist, Currently tracking the top 10 Coins by Market Cap. Created in ReactJS with Tailwind CSS Framework.</p>
            <a className='text-blue-600 text-2xl hover:text-blue-500 transform transition duration-500' href="https://baileyben.github.io/Crypto-Currency-Tracker-V2" rel="noreferrer">
                View Here
            </a>
            <a className='text-blue-600 text-2xl pl-20 hover:text-blue-500 transform transition duration-500' href="https://github.com/BaileyBen/Crypto-Currency-Tracker-V2" rel="noreferrer">
                View Code Here
            </a>
            </div>

            <div className='bg-gray-300/5 rounded-lg mt-10 pl-10 pb-5 shadow-xl hover:bg-black/30 transform transition duration-500 hover:scale-110'>
            <h1 className='text-white text-3xl pt-10 font-bold'><span className='text-blue-600'>-</span>Web3<span className='text-blue-600'>-</span>Landing<span className='text-blue-600'>-</span>Page<span className='text-blue-600'>-</span></h1>
            <ul className='text-white list-disc pt-3'>
                <li>
                <p className='text-white pt-1 text-xl'>Mobile Responsive</p>
                </li>
            </ul>
            <p className='text-white pt-4 pb-3 text-lg'>A web 3 style Landing Page, dedicated towards DEFI Staking Liquidity Pools on the Etheruem blockchain. A fun little project with no true purpose, Created in ReactJS with Tailwind CSS Framework. </p>
            <a className='text-blue-600 text-2xl hover:text-blue-500 transform transition duration-500' href="https://baileyben.github.io/BlockChain-Defi-Landing-Page/" rel="noreferrer">
                View Here
            </a>
            <a className='text-blue-600 text-2xl pl-20 hover:text-blue-500 transform transition duration-500' href="https://github.com/BaileyBen/BlockChain-Defi-Landing-Page" rel="noreferrer">
                View Code Here
            </a>
            </div>

            <div className='bg-gray-300/5 rounded-lg mt-10 pl-10 pb-5 shadow-xl hover:bg-black/30 transform transition duration-500 hover:scale-110'>
            <h1 className='text-white text-3xl pt-10 font-bold'><span className='text-blue-600'>-</span>CRUD<span className='text-blue-600'>-</span>Todo<span className='text-blue-600'>-</span>App<span className='text-blue-600'>-</span></h1>
            <ul className='text-white list-disc pt-3'>
                <li>
                <p className='text-white pt-1 text-xl'>Backend Database</p>
                </li>
            </ul>
            <p className='text-white pt-4 pb-3 text-xl'>A TODO Application with the ability to add Todo's to your list, check them off when completed and delete them when they are no longer needed. Created in ReactJS with Tailwind CSS Framework.</p>
            <a className='text-blue-600 text-2xl hover:text-blue-500 transform transition duration-500' href="https://github.com/BaileyBen/CRUD-Todo-Application#readme" rel="noreferrer">
                View Here
            </a>
            <a className='text-blue-600 text-2xl pl-20 hover:text-blue-500 transform transition duration-500' href="https://github.com/BaileyBen/CRUD-Todo-Application" rel="noreferrer">
                View Code Here
            </a>
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

export default ProjectsPage
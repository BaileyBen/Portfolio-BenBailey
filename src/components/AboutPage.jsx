import React from 'react'
import selfie from './assets/me1.jpg'

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

    </div>
  )
}

export default AboutPage
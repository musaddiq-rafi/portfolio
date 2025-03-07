import React from 'react'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-20 pt-10' id="contact">
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img
            src='./footer-grid.svg'
            alt='footer-grid'
            className='w-full h-full opacity-50'
            />
        </div>
        <div className='flex flex-col items-center '>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to get <span className='text-purple'>started?</span>
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Let&npos;s dive in and start building your dream project
            </p>
            <a href='mailto:musaddiq@iut-dhaka.edu'>
                <MagicButton
                title="Let's Talk " 
                icon=" ... 🚀"
                position='right'
                
                />
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Musaddiq Rafi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
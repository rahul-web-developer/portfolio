import { ArrowDownRightFromSquare, ArrowUpCircle, Check } from 'lucide-react'
import React from 'react'

const AboutMe = ({data}) => {
  const {
    DeveloperName,
    DeveloperEmail,
    DeveloperPhone,
    DeveloperAddress,
    LinkdinUrl,
    InstagramUrl
  } = data
  
  return (
    <div className='flex flex-col md:flex-row justify-center md:gap-12'>
     
     <div className='w-full md:w-4/12'>
      <img 
      className='rounded-lg'
      src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/about-2.jpg" alt="" />
     </div>

     <div className='w-full space-y-6 md:w-4/12 md:space-y-16'>
      <h1 className='text-[#C4CFDE] text-3xl font-semibold'>About Me</h1>
      <p className='text-[#6C8E99] font-semibold text-1xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci.</p>

     <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
      <Check color='#FF014F' />
       <mark>FrontEnd Developer</mark>
      </div>
      <div className='flex gap-4'>
      <Check color='#FF014F' />
       <mark>FrontEnd Developer</mark>
      </div>

      <div className='flex gap-4'>
      <Check color='#FF014F' />
       <mark>FrontEnd Developer</mark>
      </div>
     </div>

     <button className='text-[#FF014F]  border px-3 py-2 rounded-lg'
       style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
     >DOWNLOAD MY CV</button>
     </div>

    </div>
  )
}

export default AboutMe
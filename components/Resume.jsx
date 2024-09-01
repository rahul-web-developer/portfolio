import React from 'react'

const Resume = ({data}) => {
  const {
    DeveloperName,
    DeveloperEmail,
    DeveloperPhone,
    DeveloperAddress,
    LinkdinUrl,
    InstagramUrl
  } = data
  
  return (
    <div className='w-full p-4 md:w-8/12 mx-auto flex flex-col gap-2 md:gap-6  items-center justify-center bg-[#FFFFFF] text-black md:p-8'>
       <div className='flex flex-col items-center'>
        <h1 className='md:text-lg font-bold'>{DeveloperName}</h1>
        <p className=' md:text-lg md:font-bold'>Software Developer</p>
       </div>
       
       <div className='w-full'>
        <div className=' w-full'>
          <h1 className='bg-[#D2E4E2] w-full p-2 text font-bold text-[#030305]'>TECHNICAL SKILLS</h1>
        </div>

        <div className='flex items-center justify-between'>
        <div> 
           <ul
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>

        <div> 
        <ul 
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>React</li>
            <li>Tailwindcss</li>
            <li>Node.js</li>
          </ul>
        </div>

        </div>
       </div>

       <div className='w-full'>
        <div className=' w-full'>
          <h1 className='bg-[#D2E4E2] w-full p-2 text font-bold text-[#030305]'>PROJECTS </h1>
        </div>

        <div className='flex items-center justify-between'>
        <div> 
           <ul
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>

        <div> 
        <ul 
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>React</li>
            <li>Tailwindcss</li>
            <li>Node.js</li>
          </ul>
        </div>

        </div>
       </div>

       <div className='w-full'>
        <div className=' w-full'>
          <h1 className='bg-[#D2E4E2] w-full p-2 text font-bold text-[#030305]'>EDUCATION </h1>
        </div>

        <div className='flex items-center justify-between'>
        <div> 
           <ul
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>

        <div> 
        <ul 
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>React</li>
            <li>Tailwindcss</li>
            <li>Node.js</li>
          </ul>
        </div>

        </div>
       </div>

       <div className='w-full'>
        <div className=' w-full'>
          <h1 className='bg-[#D2E4E2] w-full p-2 text font-bold text-[#030305]'>EDUCATION </h1>
        </div>

        <div className='flex items-center justify-between'>
        <div> 
           <ul
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>

        <div> 
        <ul 
            className='p-4'
            style={{listStyle: 'square'}}>
            <li>React</li>
            <li>Tailwindcss</li>
            <li>Node.js</li>
          </ul>
        </div>

        </div>
       </div>

    </div>
  )
}

export default Resume
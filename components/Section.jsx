'use client'
import { CircleX, DoorClosed, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Section = ({children}) => {
 const [open, setOpen] = useState(false)
  const menus = [
    {
      title: 'PortFolio',
      href: '/portfolio',
    },
    {
      title: 'Resume',
      href: '/resume',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <div className="  w-full h-full bg-[#212428] md:flex items-center justify-center  text-white p-6"
    
    >

      <div className="w-full md:w-11/12 h-full flex flex-col gap-8 md:flex-row p-2  relative"
       
      >


     <div className="md:hidden">
     {
      open ? <CircleX
      className="fixed top-6 right-2"
      onClick={() => setOpen(!open)}
      /> :  <Menu className="fixed top-6 right-2"
      onClick={() => setOpen(!open)}
      />
     }
      
      {
        open && <div className=" bg-white text-black  fixed top-14 flex flex-col p-4 right-2">
          {menus.map((item, index) => 
          <Link href={item.href}>{item.title}</Link>
          )}
        </div>
      }
     

     </div>
      
      <div className="hidden flex-col sticky top-0 items-center justify-around md:flex h-[400px] md:min-w-[180px]"
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}
      >
        {
          menus.map((item, index) => (
            <Link 
            className=" font-semibold text-lg hover:text-[#FF014F]"
            href={item.href}>{item.title}</Link>
          ))
        }
      </div>

      <div className="min-h-screen h-full w-full p-4"
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>
        {children}
      </div>

      </div>

    </div>
  )
}

export default Section
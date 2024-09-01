import {  Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

const Footer = ({data}) => {
  const {
    DeveloperName,
    DeveloperEmail,
    DeveloperPhone,
    DeveloperAddress,
    LinkdinUrl,
    InstagramUrl
  } = data

  return (
    <div className="w-full md:min-h-[300px] md:p-8 bg-[#212428] flex items-center justify-center">
    <div
      className=" w-11/12 md:w-11/12 flex flex-col gap-2  md:flex-row items-center justify-center md:justify-around  bg-[#202327] md:h-[250px] rounded-lg"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      {/* box 1 */}
      <div className="flex flex-col w-full items-center justify-around md:flex-row md:items-center md:justify-center gap-4 md:gap-16 md:w-6/12 md:border-r border-[#151517]">
     

        {/* for content */}
        <div className="space-y-4">
          <h1 className="md:text-2xl font-semibold text-[#C4CFDE]">
            Find me with
          </h1>
        

          {/* for icons */}
          <div className="flex items-center gap-6">
           
            <Link
              href={InstagramUrl}
               className="p-4 rounded-lg text-[#C4CFDE]"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Twitter className="" />
            </Link>

            <Link
              href={InstagramUrl}
               className="p-4 rounded-lg text-[#C4CFDE]"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Instagram className="" />
            </Link>

            <Link
              href={LinkdinUrl}
           className="p-4 rounded-lg text-[#C4CFDE]"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Linkedin className="" />
            </Link>
          </div>
          {/* for social meadia */}
        </div>
        {/* for content end*/}
      </div>
      {/* box 1 end */}

      {/* box 2 */}
      <div className=" hidden md:flex flex-col items-center justify-around md:flex-row md:items-center md:justify-around gap-6 w-6/12 ">
        
        <div className="text-white">
          
        <form className=" space-y-2">
          <div className="flex flex-col">
            <label >Name</label>
            <input type="text" />
          </div>

          <div className="flex flex-col">
            <label >Email</label>
            <input type="text" />
          </div>

          <div className="flex flex-col">
            <label >message</label>
            <textarea type="text" />
          </div>
         
           <button className="bg-blue-500 px-2 py-1" type="submit">Send</button>
        </form>
        </div>

      </div>
      {/* box 2 end */}
    </div>
  </div>
  )
}

export default Footer
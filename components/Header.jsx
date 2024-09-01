"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = ({data}) => {
  const  {DeveloperName,
  DeveloperEmail,
  DeveloperPhone,
  DeveloperAddress,
  LinkdinUrl,
  InstagramUrl} = data
  console.log(DeveloperName)
  return (
    <div className="w-full md:min-h-[300px] p-8 bg-[#212428] flex items-center justify-center">
      <div
        className="w-11/12 flex flex-col gap-2  md:flex-row items-center justify-center md:justify-around  bg-[#202327] md:h-[250px] rounded-lg"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        {/* box 1 */}
        <div className="flex flex-col items-center justify-around md:flex-row md:items-center md:justify-center gap-4 md:gap-16 w-6/12 md:border-r border-[#151517]">
          {/* for image */}
          <div>
            <img
              className="rounded-lg"
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/banner-10.png"
              alt=""
            />
          </div>
          {/* for image end*/}

          {/* for content */}
          <div className="space-y-4">
            <h1 className="md:text-3xl font-semibold text-[#C4CFDE]">
              {DeveloperName}
            </h1>
            <p className="text-xl font-bold text-[#878E99]">
              I am a Developer
            </p>

            {/* for icons */}
            <div className="flex items-center gap-6">
              <Link
                href={""}
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
        <div className="flex flex-col items-center justify-around md:flex-row md:items-center md:justify-around gap-6 w-6/12 ">
          <div className="flex flex-col py-2 md:flex-col gap-8">
            <div>
              <label className="text-[#747A84]  md:font-semibold">EMAIL</label>
              <p className="text-[#C4CFDE] md:text-xl">{DeveloperEmail}</p>
            </div>

            <div>
              <label className="text-[#747A84]  md:font-semibold">
                BIRTHDAY
              </label>
              <p className="text-[#C4CFDE] md:text-1xl">18 Feb 2002</p>
            </div>
          </div>
          <div className="flex flex-col py-2 md:flex-col gap-8">
            <div>
              <label className="text-[#747A84]  md:font-semibold">PHONE</label>
              <p className="text-[#C4CFDE] md:text-xl">{DeveloperPhone}</p>
            </div>

            <div>
              <label className="text-[#747A84]  md:font-semibold">
                ADDRESS
              </label>
              <p className="text-[#C4CFDE] md:text-1xl">{DeveloperAddress}</p>
            </div>
          </div>
        </div>
        {/* box 2 end */}
      </div>
    </div>
  );
};

export default Header;

"use client";
import { Button, Form, Input } from "antd";
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";



const Contact = ({data}) => {
  
  const {
    DeveloperName,
    DeveloperEmail,
    DeveloperPhone,
    DeveloperAddress,
    LinkdinUrl,
    InstagramUrl
  } = data
  

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center gap-12">
      <div
        className="flex  flex-col md:w-4/12 gap-12 min-h-[500px] p-4 rounded-lg"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div>
          <img
            className="rounded-lg"
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
            alt=""
          />
        </div>

        <p className="text-[#878E99] text-lg">
          I am available for freelance work. Connect with me via and call in to
          my account.
        </p>

        <div className="">
          <div className=" flex gap-2">
            <label>Email:</label>
            <p>{DeveloperEmail}</p>
          </div>
          <div className=" flex gap-2">
            <label>Phone:</label>
            <p>{DeveloperPhone}</p>
          </div>
        </div>

        <mark className=" w-fit font-semibold text-[]">FIND WITH ME</mark>

        <div className="flex items-center gap-6">
          <Link
            href={""}
            className="p-4 rounded-lg hover:text-[#C4CFDE]"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Twitter className="" />
          </Link>

          <Link
            href={InstagramUrl}
            className="p-4 rounded-lg"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Instagram className="" />
          </Link>

          <Link
            href={LinkdinUrl}
            className="p-4 rounded-lg"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Linkedin className="" />
          </Link>
        </div>
      </div>

      <div
        className="w-full md:w-5/12 p-4 rounded-lg md:p-11"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Form layout="vertical" className=" flex flex-col w-full">
          <div className="flex flex-col
         
          md:flex-row items-center justify-between md:gap-4">
            <Form.Item className="w-full"
              label={
                <label className="text-[#989FAA] md:text-2xl font-semibold">
                  NAME
                </label>
              }
            >
              <Input placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item
            className="w-full"
              label={
                <label className="text-[#989FAA] md:text-2xl font-semibold">
                  PHONE NUMBER
                </label>
              }
            >
              <Input placeholder="Enter Your Phone Number" />
            </Form.Item>
          </div>

          <Form.Item
            label={
              <label className="text-[#989FAA] md:text-2xl font-semibold">
                EMAIL
              </label>
            }
          >
            <Input placeholder="Example@gmail.com" />
          </Form.Item>

          <Form.Item
            label={
              <label className="text-[#989FAA] md:text-2xl font-semibold">
                SUBJECT
              </label>
            }
          >
            <Input placeholder="Enter Your Subject" />
          </Form.Item>

          <Form.Item
            label={
              <label className="text-[#989FAA] md:text-2xl font-semibold">
                MESSAGE
              </label>
            }
          >
            <Input.TextArea rows={6} placeholder="Enter Your Message..." />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

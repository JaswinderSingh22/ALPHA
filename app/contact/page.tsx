import { MailLogo } from "@/components/icons/mail";
import { MobileLogo } from "@/components/icons/mobile";
import { LinkedIn } from "@/components/icons/linkedIn";
import { GitHub } from "@/components/icons/gitHub";
import Image from "next/image";
import React from 'react'

export default function Contact() {
  return (
    <div className="w-full bg-black h-full p-16 flex justify-start overflow-auto">
      <div className="w-full h-full bg-blue-300 rounded-s-3xl relative">
        <Image
          src="/assets/contact.jpg"
          fill
          alt="Contact"
          className="rounded-s-3xl"
        ></Image>
      </div>
      <div className="w-full h-full bg-blue-200 rounded-e-3xl flex flex-col p-5">
        <div className="text-3xl bold text-center">CONTACT ME</div>
        <div className="flex mt-10 gap-5 items-center">
          <MailLogo />
          <div>jaswindersingh@iitdalumni.com</div>
        </div>
        <div className="flex mt-5 gap-5 items-center">
          <MobileLogo />
          <div>887273****</div>
        </div>
        <div className="flex mt-5 gap-5 items-center">
          <LinkedIn />
          <a href="https://www.linkedin.com/in/jaswinder-singh-8a8b90167/">
            linkedin.com/in/jaswinder-singh-8a8b90167
          </a>
        </div>
        <div className="flex mt-5 gap-5 items-center">
          <GitHub />
          <a href="https://github.com/JaswinderSingh22">JaswinderSingh22</a>
        </div>
      </div>
    </div>
  );
}

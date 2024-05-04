import React from "react";
import styles from "./styles.module.css";
import { AcmeLogo } from "../icons/logo";
export default function NavBar() {
  return (
    <div className="w-full h-12 bg-[#8e86ea] text-black flex items-center justify-between p-3">
      <div className="flex gap-2 items-center">
        <AcmeLogo /> ALPHA
      </div>
      <div className="flex gap-5 mr-5">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

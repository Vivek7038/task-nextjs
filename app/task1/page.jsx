"use client";

import Link from "next/link";
import "./task1.css";
import { useState, useEffect } from "react";
import { FaFile } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { FaPerson } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { LuFileText } from "react-icons/lu";

export default function App() {
  const [icon, setIcon] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (icon < 7) {
        setIcon((prevIcon) => prevIcon + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 5000); 

    
    return () => clearInterval(intervalId);
  }, [icon]);


  return (
    <>
      <div className="pl-8 mt-4">
        <Link
          href="/"
          className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  w-fit pt-1 z-20 pl-6  "
        >
          Home
        </Link>
      </div>
      <div className="triangle-container ">
        <div className="top-nodes">
          <div className="circle circle1 justify-center ">
            1
            <div className={icon === 1 ? "icon-1" : "hidden"}>
              <FaFile color="yellow" />
            </div>
            <div className={icon === 6 ? "icon-6" : "hidden"}>
              <FaFile color="yellow" />
            </div>
          </div>
          <div className="circle">
            2
            <div className={icon === 2 ? "icon-2" : "hidden"}>
              <GrTask color="yellow" />
            </div>
            <div>
            
            </div>
          </div>
        </div>
        <div className="base-node">
          <div className="circle">3
          <div className={icon === 3 ? "icon-3" : "hidden"}>
              <FaPerson color="yellow" />
            </div>
          <div className={icon === 4 ? "icon-4" : "hidden"}>
              <FaBoxOpen color="yellow" />
            </div>
          <div className={icon === 5 ? "icon-5" : "hidden"}>
              <LuFileText color="yellow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

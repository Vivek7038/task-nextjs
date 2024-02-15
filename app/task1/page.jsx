"use client";

import Link from "next/link";
import "./task1.css";
import { FaFile } from "react-icons/fa";

export default function App() {
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
            <div>
            <FaFile color="yellow"/>
            </div>
          </div>
          <div className="circle">2</div>
        </div>
        <div className="base-node">
          <div className="circle">3</div>
        </div>
      </div>
    </>
  );
}

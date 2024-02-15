"use client";

import Link from "next/link";
import "./task1.css";
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
    </>
  );
}

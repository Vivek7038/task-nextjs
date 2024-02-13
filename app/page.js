import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <main className=" min-h-screen p-24">
      <div className="flex flex-row gap-8">
        <Link href="/task1" className="bg-red-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-5 w-fit"> Task 1</Link>
        <Link href="/task2" className="bg-green-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-5 w-fit"> Task 2</Link>
      </div>

    </main>
  );
}

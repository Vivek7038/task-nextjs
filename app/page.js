import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <main className=" min-h-screen p-24">
      <div className="flex flex-row gap-8">
        <Link href="/task1"> Task 1</Link>
        <Link href="/task2"> Task 2</Link>
      </div>

    </main>
  );
}

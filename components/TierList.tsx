import React from 'react'
import Link from "next/link";

function TierList() {
  return (
    <div>
      <div className="p-10 flex flex-col space-y-4 max-w-3xl mx-auto mt-12 bg-gray-500 text-white font-bold">
      <header className="bg-gray-200 text-black text-center text-3xl font-extrabold rounded-lg mt-4">TierList</header>
  {/* S Tier */}

{/* S Tier */}
<div className="flex items-center space-x-4 bg-red-600 p-4 rounded-xl shadow-lg">
  <span className="text-2xl w-12">S</span>
  <div className="flex flex-wrap gap-4">
  
  </div>
</div>

{/* A Tier */}
<div className="flex items-center space-x-4 bg-orange-500 p-4 rounded-xl shadow-lg">
  <span className="text-2xl w-12">A</span>
  <div className="flex flex-wrap gap-4">
    
    <Link href="/user/UNK">
      <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
        UNK
      </div>
    </Link>
    <Link href="/user/kicks">
      <div className="bg-white text-black px-4 py-2 rounded-lg">Kicks</div>
      </Link>
      <Link href="/user/Gebu">
      <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
        Gebu
      </div>
    </Link>
  </div>
</div>

{/* B Tier */}
<div className="flex items-center space-x-4 bg-yellow-500 p-4 rounded-xl shadow-lg">
  <span className="text-2xl w-12">B</span>
  <div className="flex flex-wrap gap-4">
    <Link href="/user/FTF">
      <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
        FTF
      </div>
    </Link>
    <Link href="/user/Lamp">
      <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
       The Lamp
      </div>
    </Link>

    <Link href="/user/ACJATB">
      <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
        AC JATB
      </div>
    </Link>
    <Link href="/user/A3G">
      <div className="bg-white text-black px-4 py-2 rounded-lg">A3G</div>
      </Link>
  </div>
</div>


  {/* C Tier */}
  <div className="flex items-center space-x-4 bg-green-500 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">C</span>
    <div className="flex flex-wrap gap-4">
     <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
        Ty
      </div>
      <Link href="/user/dog">
      <div className="bg-white text-black px-4 py-2 rounded-lg">DOG</div>
      </Link>

      <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
       DQ
      </div>
    </div>
  </div>

  {/* D Tier */}
  <div className="flex items-center space-x-4 bg-blue-500 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">D</span>
    <div className="flex flex-wrap gap-4">
      <Link href="/user/pippers">
      <div className="bg-white text-black px-4 py-2 rounded-lg">pippers</div>
      </Link>
      <Link href="/user/dan">
      <div className="bg-white text-black px-4 py-2 rounded-lg">Dan</div>
      </Link>
    </div>
  </div>

  {/* E Tier */}
  <div className="flex items-center space-x-4 bg-indigo-500 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">E</span>
    <div className="flex flex-wrap gap-4">

    <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
        Ryan
      </div>

     <div className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
        Stephanie
      </div>
      
      <div className="bg-white text-black px-4 py-2 rounded-lg">Tyson</div>
      
    </div>
  </div>
</div>



    </div>
  )
}

export default TierList
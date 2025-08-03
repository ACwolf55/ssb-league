import React from 'react'

function TierList() {
  return (
    <div>
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto mt-12 bg-gray-500 text-white font-bold">
      <header className="bg-gray-200 text-blue-600 text-center text-3xl font-extrabold">TierList</header>
  {/* S Tier */}
  <div className="flex items-center space-x-4 bg-red-600 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">S</span>
    <div className="flex flex-wrap gap-4">
      <div className="bg-white text-black px-4 py-2 rounded-lg">Gebu</div>
    </div>
  </div>

  {/* A Tier */}
  <div className="flex items-center space-x-4 bg-orange-500 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">A</span>
    <div className="flex flex-wrap gap-4">
      <div className="bg-white text-black px-4 py-2 rounded-lg">AC Just A Thang Baby</div>
      <div className="bg-white text-black px-4 py-2 rounded-lg">UNK</div>
    </div>
  </div>

  {/* B Tier */}
  <div className="flex items-center space-x-4 bg-yellow-500 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">B</span>
    <div className="flex flex-wrap gap-4">
      <div className="bg-white text-black px-4 py-2 rounded-lg">FTF</div>
      <div className="bg-white text-black px-4 py-2 rounded-lg">Lamp</div>
      <div className="bg-white text-black px-4 py-2 rounded-lg">Ty</div>
    </div>
  </div>

  {/* C Tier */}
  <div className="flex items-center space-x-4 bg-green-500 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">C</span>
    <div className="flex flex-wrap gap-4">
      <div className="bg-white text-black px-4 py-2 rounded-lg">Kiks</div>
      <div className="bg-white text-black px-4 py-2 rounded-lg">Adrian</div>
      <div className="bg-white text-black px-4 py-2 rounded-lg">Dylan</div>
    </div>
  </div>

  {/* D Tier */}
  <div className="flex items-center space-x-4 bg-blue-500 p-4 rounded-xl shadow-lg">
    <span className="text-2xl w-12">D</span>
    <div className="flex flex-wrap gap-4">
      <div className="bg-white text-black px-4 py-2 rounded-lg">Mitch</div>
      <div className="bg-white text-black px-4 py-2 rounded-lg">Dan</div>
    </div>
  </div>
</div>



    </div>
  )
}

export default TierList
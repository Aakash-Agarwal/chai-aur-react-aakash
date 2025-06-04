import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: bgColor}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 p-2 m-8 inset-x-0 bg-white rounded-2xl gap-3">
              <button onClick={() => setBgColor("Red")} className="bg-red-500 outline-none px-4 py-1 rounded-full shadow-2xl">Red</button>
              <button onClick={() => setBgColor("Green")} className="bg-green-500 outline-none px-4 py-1 rounded-full shadow-2xl">Green</button>
              <button onClick={() => setBgColor("Blue")} className="bg-blue-500 outline-none px-4 py-1 rounded-full shadow-2xl">Blue</button>
              <button onClick={() => setBgColor("Yellow")} className="bg-yellow-500 outline-none px-4 py-1 rounded-full shadow-2xl">Yellow</button>
              <button onClick={() => setBgColor("Orange")} className="bg-orange-500 outline-none px-4 py-1 rounded-full shadow-2xl">Orange</button>
              <button onClick={() => setBgColor("#008B8B")} className="outline-none px-4 py-1 rounded-full shadow-2xl" style={{backgroundColor: '#008B8B'}}>Cyan</button>
              <button onClick={() => setBgColor("#E6E6FA")} className="outline-none px-4 py-1 rounded-full shadow-2xl" style={{backgroundColor: '#E6E6FA'}}>Lavender</button>
              <button onClick={() => setBgColor("#7FFFD4")} className="outline-none px-4 py-1 rounded-full shadow-2xl" style={{backgroundColor: '#7FFFD4'}}>Aquamarine</button>
          </div>
      </div>
    </>
  )
}

export default App

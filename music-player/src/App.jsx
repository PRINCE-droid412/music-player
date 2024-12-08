
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-blue-500 text-2xl">
      Tailwind CSS is working!
    </div>
  );
}
export default App

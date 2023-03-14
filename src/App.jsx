import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Missions from "./components/Missions"
import Profile from "./components/Profile"
import Rockets from "./components/Rockets"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route element={<Navbar />}>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

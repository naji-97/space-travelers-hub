import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"> </Route>
        <Route path="/Rockets" element={<Rockets />}> </Route>
        <Route path="/Missions" element={<Missions />}> </Route>
        <Route path="/Profile" element={<Profile />}>  </Route>
      </Routes>
    </div>
  );
}

export default App;

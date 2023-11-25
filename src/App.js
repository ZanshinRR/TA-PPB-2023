import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { RiNewspaperLine } from 'react-icons/ri'
import { GrSchedulePlay } from "react-icons/gr";
import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import AnimeNews from './pages/Animenews'
import Schedule from './pages/Schedule'
import SplashScreen from './pages/SplashScreen'
import Sidebar from "./component/sidebar";
import Searchbar from "./component/searchbar"


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu tunggu splash screen (contoh: 2 detik)
    const splashTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Membersihkan timeout saat komponen dibongkar
    return () => clearTimeout(splashTimeout);
  }, []);


  return (
    <BrowserRouter>
      <header>
       <Searchbar/>
        <p id="titleGroup">Anime News Plus</p>
        <Sidebar/>
      </header>
      <Routes>
  <Route path="/" element={<SplashScreen />} />
  <Route path="/movie" element={<Movie />} />
  <Route path="/schedule" element={<Schedule />} />
  <Route path="/news" element={<AnimeNews />} />


</Routes>
<footer>
<NavLink to="/schedule" className="iconWrapper">
    <GrSchedulePlay className="icon" /> Schedule
  </NavLink>
  <NavLink to="/movie" className="iconWrapper">
    <HiHome className="icon" /> Home
  </NavLink>
  <NavLink to="/news" className="iconWrapper">
    <RiNewspaperLine className="icon" /> News
  </NavLink>
</footer>
    </BrowserRouter>
  )
}

export default App

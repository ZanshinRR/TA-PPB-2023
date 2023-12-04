// SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulasi waktu tunggu splash screen (contoh: 2 detik)
    const splashTimeout = setTimeout(() => {
      // Setelah splash screen, arahkan ke halaman /movie
      navigate('/movie');
    }, 2000);

    // Membersihkan timeout saat komponen dibongkar
    return () => clearTimeout(splashTimeout);
  }, [navigate]);

  return (
    <div className="splash-screen">
      {/* Add splash screen elements here */}
      <h1>Anime News Plus</h1>
      <h2>Loading..</h2>
      <img src="https://media.tenor.com/l6u0sCzYdiwAAAAC/gura-roomba-gawr-gura.gif" alt="Loading animation" />
    </div>
  );
};

export default SplashScreen;

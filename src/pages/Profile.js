// Profile.js
import React from 'react';

const Profile = () => {
  // Example data
  const desc = " Anime News Plus adalah website berita anime, manga, games, novel, press dan banyak lainnya yang berbasis online komunitas. "
  const name = "Fauzan Ramadhan";
  const nim = "21120121120028";
  const imageUrl = "https://static.wikia.nocookie.net/joke-battles/images/d/df/Gigachad.png";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ color: "black" }}>About Us</h1>

      <p style={{ color: "black" }}>{desc}</p>

      
      <h1 style={{ color: "black" }}>Created by</h1>
      <img src={imageUrl} alt="About Us" style={{ width: "150px", height: "150px", borderRadius: "50%", margin: "10px" }} />
      <p style={{ color: "black" }}>Name: {name}</p>
      <p style={{ color: "black" }}>NIM: {nim}</p>

    </div>
  );
};

export default Profile;

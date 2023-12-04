// Import library yang dibutuhkan
import React, { Fragment, useEffect, useState } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";
import axios from "axios";

export default function Movie() {
  // State untuk menyimpan data dari API
  const [animeData, setAnimeData] = useState([]);

  // useEffect akan dipanggil setelah komponen dirender
  useEffect(() => {
    // Lakukan permintaan GET ke API Jikan
    axios.get(`https://http://localhost:3000/api.jikan.moe/v4/anime/`)
      .then(response => {
        // Mengatur state dengan data yang diperoleh dari API
        setAnimeData(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching anime data:", error);
      });
  }, []); // Parameter kedua useEffect adalah array dependencies, kosong berarti hanya dijalankan sekali saat komponen mount

  return (
    <>
      <p id="movies">Fall 2023 Anime</p>
      <div className="containerTop">
        {/* Mapping data dari state animeData */}
        {animeData.map((item) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.image_url}
              genre={item.genres.map(genre => genre.name).join(", ")}
              score={`Rating : ${item.score}`}
            />
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">Recent Anime News</p>
          {/* Mapping data dari state animeData untuk news */}
          {animeData.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.image_url}
                genre={item.genres.map(genre => genre.name).join(", ")}
                onClick={() => alert("item id = " + item.id)}
              />
              {animeData.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

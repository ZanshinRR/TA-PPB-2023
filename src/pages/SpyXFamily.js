import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${52991}/full`);

        if (response.ok) {
          const data = await response.json();
          
          if (data && data.data) {
            console.log("Anime Details:", data.data);
            setAnimeDetails(data.data);
          } else {
            console.error("Invalid data format:", data);
            setError("Invalid data format");
          }
        } else if (response.status === 404) {
          console.error("Anime not found:", response.status);
          setError("Anime not found");
        } else {
          console.error("API request failed with status:", response.status);
          setError("API request failed");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Anime Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>{animeDetails.title}</h2>
          <img src="https://cdn.myanimelist.net/images/anime/1015/138006l.jpg" alt={animeDetails.title} />
          <p>{animeDetails.synopsis}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default DetailPage;

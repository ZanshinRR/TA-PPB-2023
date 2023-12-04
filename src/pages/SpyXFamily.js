import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch anime details
        const response = await fetch(`https://api.jikan.moe/v4/anime/${53887}/full`);

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

        // Fetch episodes
        const episodesResponse = await fetch(`https://api.jikan.moe/v4/anime/${53887}/episodes`);
        if (episodesResponse.ok) {
          const episodesData = await episodesResponse.json();
          setEpisodes(episodesData.data || []);
        } else {
          console.error("Failed to load episodes:", episodesResponse.status);
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
          <img src={animeDetails.images?.jpg?.large_image_url} alt={animeDetails.title} />
          <p>{animeDetails.synopsis}</p>
          
          <h2>Episodes</h2>
          {episodes.length > 0 ? (
            <ul>
              {episodes.map((episode, index) => (
                <li key={index}>{episode.title}</li>
              ))}
            </ul>
          ) : (
            <p>No episodes available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailPage;
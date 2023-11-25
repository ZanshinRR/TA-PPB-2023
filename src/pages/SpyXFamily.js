import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${53887}/full`);
        const data = await response.json();
        setAnimeDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
      ) : (
        <div>
          <h2>{animeDetails.title}</h2>
          <img src={animeDetails.images?.jpg.large.url} alt={animeDetails.title} />
          <p>{animeDetails.synopsis}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default DetailPage;
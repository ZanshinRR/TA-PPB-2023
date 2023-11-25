import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AnimeNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeNews = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${52991}/news`);

        
        if (response.status=== 200) {
          setNews(response.data.data);
          console.log(news)
        }
      } catch (error) {
        console.error('Error fetching anime news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeNews();
  }, [52991]);

  if (loading) {
    return <p>Loading...</p>;
  }
// Inside the AnimeNews component

return (
    <div className="AnimeNews">
      <h2>Anime News</h2>
      {loading ? (
        <p className="AnimeNews-loading">Loading...</p>
      ) : (
        <ul>
          {news.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
          }

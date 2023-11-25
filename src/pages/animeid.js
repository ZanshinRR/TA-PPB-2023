import React from 'react';
import AnimeNews from './Animenews';

const App = () => {
  const animeId = 52991; // Replace with the actual ID of the anime you want to fetch news for

  return (
    <div>
      <h1>Your Anime App</h1>
      <AnimeNews animeId={animeId} />
    </div>
  );
};

export default App;
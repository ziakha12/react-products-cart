import React, { useState, useEffect } from 'react';

function Movies() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://tv-api.com/en/API/Top250Movies/k_12345678';
      const options = { method: 'GET', headers: { accept: 'application/json' } };

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setMovies(json.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
    console.log(movies);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies
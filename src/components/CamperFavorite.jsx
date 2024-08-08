import React, { useEffect, useState } from 'react';
import { getAdvertById } from '../services/api';

const CamperFavorite = ({ favArray }) => {
  const [favorites, setFavorites] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const results = await Promise.all(
          favArray.map(id => getAdvertById(id))
        );

        setFavorites(results);
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };
    fetchFavorites();
  }, [favArray]);

  return (
    <div>
      <ul>
        {Array.isArray(favorites) &&
          favorites.map(item => {
            return <li key={item._id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default CamperFavorite;

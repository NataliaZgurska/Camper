import React, { useEffect, useState } from 'react';
import { getAdverts } from '../../services/api';
import CamperElement from '../../components/CamperElement.jsx';
import CamperFavorite from '../../components/CamperFavorite.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  const [campers, setCampers] = useState(null);
  const [visebleCount, setVisebleCount] = useState(4);

  const [favorites, setFavorites] = useState(() => {
    const stringifiedFavorites = localStorage.getItem('favorites');
    if (!stringifiedFavorites) return [];
    const parseFavorites = JSON.parse(stringifiedFavorites);
    return parseFavorites;
  });

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        setIsLoading(true);
        const data = await getAdverts();
        setCampers(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCampers();
  }, []);

  const handleloadMore = () => {
    setVisebleCount(prevCount => prevCount + 4);
  };

  const toggleFavorite = item => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(item)) {
        return prevFavorites.filter(fav => fav !== item);
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={css.homePageContainer}>
      <ul>
        {Array.isArray(campers) &&
          campers.map(item => {
            return (
              <li key={item._id}>
                adults: {item.adults}, transmission: {item.transmission},
                engine: {item.engine}, kitchen: {item.details.kitchen}, beds:{' '}
                {item.details.beds}, AC: {item.details.airConditioner}
              </li>
            );
          })}
      </ul>
      <ul>
        {Array.isArray(campers) &&
          campers.slice(0, visebleCount).map(item => {
            return (
              <li key={item._id}>
                <CamperElement camper={item} addFavorites={toggleFavorite} />
              </li>
            );
          })}
      </ul>
      {Array.isArray(campers) && visebleCount < campers.length && (
        <button className="btn" type="button" onClick={handleloadMore}>
          Load more
        </button>
      )}
      <h2>Favorites</h2>
      <CamperFavorite favArray={favorites} />
    </div>
  );
};

export default HomePage;

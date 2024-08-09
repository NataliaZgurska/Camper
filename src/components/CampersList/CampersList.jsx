import React, { useState } from 'react';
import CamperItem from '../CamperItem/CamperItem.jsx';
import css from './CampersList.module.css';

const CampersList = ({ campers }) => {
  const [visebleCount, setVisebleCount] = useState(4);

  const handleloadMore = () => {
    setVisebleCount(prevCount => prevCount + 4);
  };

  return (
    <div className={css.campersListContainer}>
      <ul className={css.campersList}>
        {Array.isArray(campers) &&
          campers.slice(0, visebleCount).map(item => {
            return (
              <li key={item._id}>
                {/* {item.name} */}
                <CamperItem camper={item} />
              </li>
            );
          })}
      </ul>

      {Array.isArray(campers) && visebleCount < campers.length && (
        <button className="btn" type="button" onClick={handleloadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;

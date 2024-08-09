import React, { useState } from 'react';
import BoxOption from './BoxOption/BoxOption';
import css from '../pages/HomePage/HomePage.module.css';

const CamperElement = ({ camper, addFavorites }) => {
  const [isBlue, setIsBlue] = useState(false);

  const onBtnClick = () => {
    addFavorites(camper._id);
    setIsBlue(prevState => !prevState);
  };

  return (
    <div className={css.itemContainer}>
      <div className={css.item}>
        <p>{camper.name}</p>
        <button
          onClick={onBtnClick}
          style={{
            backgroundColor: isBlue ? 'blue' : 'white',
            color: isBlue ? 'white' : 'black',
            padding: '10px 20px',
            border: '1px solid black',
            cursor: 'pointer',
          }}
        >
          Fav
        </button>
      </div>

      <BoxOption camper={camper} />
    </div>
  );
};

export default CamperElement;

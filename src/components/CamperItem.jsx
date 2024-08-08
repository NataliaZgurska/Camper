import React, { useState } from 'react';

const alertStyles = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
};

const CamperItem = ({ camper, addFavorites }) => {
  const [isBlue, setIsBlue] = useState(false);

  const onBtnClick = () => {
    addFavorites(camper._id);
    setIsBlue(prevState => !prevState);
  };

  return (
    <div style={alertStyles}>
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
        Favoirite
      </button>
    </div>
  );
};

export default CamperItem;

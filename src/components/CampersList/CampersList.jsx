import React, { useState } from 'react';
import CamperItem from '../CamperItem/CamperItem.jsx';
import css from './CampersList.module.css';

const CampersList = ({ campers, handleloadMore, btnLoadMore }) => {
  return (
    <div className={css.campersListContainer}>
      <ul className={css.campersList}>
        {Array.isArray(campers) &&
          campers.map(item => {
            return (
              <li key={item._id}>
                <CamperItem camper={item} />
              </li>
            );
          })}
      </ul>

      {btnLoadMore && (
        <button className="btn" type="button" onClick={handleloadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;

// <ul className={css.campersList}>
//   {Array.isArray(campers) &&
//     campers.slice(0, visebleCount).map(item => {
//       return (
//         <li key={item._id}>
//           {/* {item.name} */}
//           <CamperItem camper={item} />
//         </li>
//       );
//     })}
// </ul>;

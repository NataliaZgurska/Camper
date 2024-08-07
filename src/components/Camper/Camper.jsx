import React from 'react';
import { LuEuro } from 'react-icons/lu';
import exampleImg from '../../assets/img/Switch.png';
import css from './Camper.module.css';

const Camper = () => {
  return (
    <div className={css.camperContainer}>
      <div className={css.imgContainer}>
        <img src={exampleImg} alt="Example" />
      </div>

      <div className={css.camperContext}>
        <div className={css.titleInf}>
          <div className={css.titlePrice}>
            <h2 className={css.title}>Maverics</h2>
            <h2 className={css.priceHeart}>
              <LuEuro />
              8000.00
            </h2>
          </div>

          <div className={css.ratingLocation}>
            <p className={css.rating}> 4.4 (2 Reviews)</p>

            <p className={css.location}> Kyiv, Ukraine</p>
          </div>
        </div>

        <p className={css.additionalInf}>
          Embrace simplicity and freedom with the Maveriks
        </p>

        <div className={css.optionsInf}></div>
        <button className="btn">Show more</button>
      </div>
    </div>
  );
};

export default Camper;

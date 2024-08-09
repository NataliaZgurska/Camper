import React, { useState } from 'react';
import { LuEuro } from 'react-icons/lu';
import BoxOption from '../BoxOption/BoxOption.jsx';
import css from './CamperItem.module.css';
import CamperModalAdd from '../CamperModalAdd/CamperModalAdd.jsx';

const CamperItem = ({ camper }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  } = camper;

  // *****модальне вікно додаткової інформації****
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // *******

  return (
    <div className={css.camperContainer}>
      <div className={css.imgContainer}>
        <img src={gallery[0]} alt="camper photo" />
      </div>

      <div className={css.camperContext}>
        <div className={css.titleInf}>
          <div className={css.titlePrice}>
            <h2 className={css.title}>{name}</h2>
            <h2 className={css.priceHeart}>
              <LuEuro />
              {`${price}.00`}
            </h2>
          </div>

          <div className={css.ratingLocation}>
            <p className={css.rating}>
              {rating} ({reviews.length} Reviews)
            </p>

            <p className={css.location}> {location}</p>
          </div>
        </div>

        <p className={css.additionalInf}>{description}</p>

        <div className={css.optionsInf}>
          <BoxOption camper={camper} />
        </div>

        <button type="button" className="btn" onClick={openModal}>
          Show more
        </button>

        <CamperModalAdd
          isOpen={modalIsOpen}
          closeModal={closeModal}
          camper={camper}
        />
      </div>
    </div>
  );
};

export default CamperItem;

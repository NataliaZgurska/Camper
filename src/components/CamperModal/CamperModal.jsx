import React from 'react';
import { LuEuro } from 'react-icons/lu';
import style from './CamperModal.module.css';
import css from '../CamperItem/CamperItem.module.css';

const CamperModal = ({ camper }) => {
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

  return (
    <div className={style.modalContainer}>
      <div className={style.modalHeader}>
        <h2 className={css.title}>{name}</h2>

        <div className={css.modalRatingPrice}>
          <div className={css.ratingLocation}>
            <p className={css.rating}>
              {rating} ({reviews.length} Reviews)
            </p>
            <p className={css.location}> {location}</p>
          </div>
        </div>

        <h2 className={style.modalPrice}>
          <LuEuro />
          {`${price}.00`}
        </h2>
      </div>

      <ul className={style.modalGalleryList}>
        <li className={style.modalGalleryListItem}>
          <img src={gallery[0]} alt="camper photo" />
        </li>
        <li className={style.modalGalleryListItem}>
          <img src={gallery[1]} alt="camper photo" />
        </li>
        <li className={style.modalGalleryListItem}>
          <img src={gallery[2]} alt="camper photo" />
        </li>
      </ul>

      <div className={style.modalDescriptionFeaturesReviews}>
        <p className={style.modalDescription}>{description}</p>
        <div className={style.modalFeaturesReviews}>
          <h3>Features</h3>
          <h3>Reviews</h3>
        </div>
      </div>
    </div>
  );
};

export default CamperModal;

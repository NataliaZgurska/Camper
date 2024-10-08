import React from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from './BoxOption.module.css';

const BoxOption = ({ camper, isModalOpen }) => {
  const { adults, transmission, engine, details } = camper;

  return (
    <div className={css.boxOptionContainer}>
      <ul className={css.boxOptionList}>
        <li className={css.boxOption}>
          <svg className="iconOption" width="24" height="24">
            <use href={`${sprite}#icon-Users`} />
          </svg>
          <p>{adults} adults</p>
        </li>
        <li className={css.boxOption}>
          <svg className="iconOption" width="17" height="18">
            <use href={`${sprite}#icon-automatic`} />
          </svg>
          <p>{transmission}</p>
        </li>
        <li className={css.boxOption}>
          <svg className="iconOption" width="20" height="20">
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          <p>{engine}</p>
        </li>
        {details.kitchen > 0 && (
          <li className={css.boxOption}>
            <svg className="iconOption" width="20" height="20">
              <use href={`${sprite}#icon-Kitchen`} />
            </svg>
            <p>Kitchen</p>
          </li>
        )}
        <li className={css.boxOption}>
          <svg className="iconOption" width="26" height="27">
            <use href={`${sprite}#icon-bed`} />
          </svg>
          <p>{details.beds} beds</p>
        </li>

        {details.AC > 0 && (
          <li className={css.boxOption}>
            <svg className="iconOption" width="28" height="24">
              <use href={`${sprite}#icon-ac`} />
            </svg>
            <p>AC</p>
          </li>
        )}

        {isModalOpen && details.airConditioner > 0 && (
          <li className={css.boxOption}>
            <svg className="iconOption" width="20" height="20">
              <use href={`${sprite}#icon-aircond`} />
            </svg>
            <p>{details.airConditioner} air conditioner</p>
          </li>
        )}

        {isModalOpen && details.CD > 0 && (
          <li className={css.boxOption}>
            <svg className="iconOption" width="20" height="20">
              <use href={`${sprite}#icon-cd`} />
            </svg>
            <p> CD</p>
          </li>
        )}

        {isModalOpen && details.radio > 0 && (
          <li className={css.boxOption}>
            <svg className="iconOption" width="20" height="20">
              <use href={`${sprite}#icon-radio`} />
            </svg>
            <p> radio</p>
          </li>
        )}

        {isModalOpen && details.hob > 0 && (
          <li className={css.boxOption}>
            <svg className="iconOption" width="20" height="20">
              <use href={`${sprite}#icon-hob`} />
            </svg>
            <p>{details.hob} hob</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BoxOption;

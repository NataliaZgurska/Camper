import React from 'react';
import Filters from '../../components/Filters/Filters.jsx';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={css.catalogFilterContainer}>
      <Filters />

      <div>Catalog</div>
    </div>
  );
};

export default CatalogPage;

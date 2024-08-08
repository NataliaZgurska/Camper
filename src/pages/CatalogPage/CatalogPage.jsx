import React from 'react';
import { Helmet } from 'react-helmet-async';
import Filters from '../../components/Filters/Filters.jsx';
import Camper from '../../components/Camper/Camper.jsx';

import css from './CatalogPage.module.css';

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(fetchAdverts());
// }, [dispatch]);

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <title>CamperCatalog</title>
      </Helmet>

      <div className={css.catalogFilterContainer}>
        <Filters />

        <Camper />
      </div>
    </>
  );
};

export default CatalogPage;

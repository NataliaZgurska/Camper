import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';

import css from './CatalogPage.module.css';
import { getAdverts } from '../../services/api.jsx';

const CatalogPage = () => {
  const [campers, setCampers] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        setIsLoading(true);
        const data = await getAdverts();
        setCampers(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCampers();
  }, []);

  return (
    <>
      <Helmet>
        <title>CamperCatalog</title>
      </Helmet>

      <div className={css.catalogFilterContainer}>
        {/* <Filters /> */}
        <CampersList campers={campers} />
      </div>
    </>
  );
};

export default CatalogPage;

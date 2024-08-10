import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';

import css from './CatalogPage.module.css';
import { getAdverts, getTotalAdverts } from '../../services/api.jsx';

const CatalogPage = () => {
  // const [campers, setCampers] = useState(null);
  // const [page, setPage] = useState(1);
  // const [totalCampers, setTotalCampers] = useState(0);
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchTotalCampers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await getTotalAdverts(page);
  //       setTotalCampers(data);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchTotalCampers();
  // }, []);

  // useEffect(() => {
  //   const fetchCampers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await getAdverts(page);
  //       setCampers(data);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchCampers();
  // }, [page]);

  const [campers, setCampers] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCampers, setTotalCampers] = useState(0);
  const [status, setStatus] = useState({ loading: false, error: false });
  const [btnLoadMore, setBtnLoadMore] = useState(true);

  const fetchData = async () => {
    setStatus({ loading: true, error: false });

    try {
      const totalData = await getTotalAdverts(page);
      setTotalCampers(totalData);

      const campersData = await getAdverts(page);
      setCampers(campersData);
    } catch (error) {
      setStatus({ loading: false, error: true });
    } finally {
      setStatus(prevStatus => ({ ...prevStatus, loading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleloadMore = () => {
    if (page * 4 < totalCampers) {
      setBtnLoadMore(true);
      setPage(prevPage => prevPage + 1);
    } else {
      setBtnLoadMore(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>CamperCatalog</title>
      </Helmet>

      <div className={css.catalogFilterContainer}>
        {/* <Filters /> */}

        {status.loading && <p>Loading...</p>}
        {status.error && <p>Error loading data. Please try again later.</p>}
        {campers && (
          <CampersList
            campers={campers}
            handleloadMore={handleloadMore}
            btnLoadMore={btnLoadMore}
          />
        )}
      </div>
    </>
  );
};

export default CatalogPage;

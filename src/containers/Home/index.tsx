import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DefaultLayout from '../../assets/layout/DefaultLayout';
import FeatureBlock from '../../components/FeatureBlock';
import FilterSidebar from '../../components/FilterSidebar';
import ContentBlock from '../../components/ContentBlock';
import { ReactComponent as Sort } from "../../assets/images/icons/sort.svg";
import { ReactComponent as Filter } from "../../assets/images/icons/filter.svg";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch]);


  return (
    <DefaultLayout>
      <FeatureBlock img="" title="" category="" details="" />
      <hr />
      <div className="d-flex-center justify-between flex-wrap content-top-block">
        <h3 className="content-title">
          Photography / <span style={{ color: '#9B9B9B' }}>Premium Photos</span>
        </h3>
        <div className="d-flex-center sort-div">
          <Sort />
          <p className="sort-by-title">SORT BY</p>
          <select className="sort-by-select">
            <option>Price</option>
            <option>Alphabetically</option>
          </select>
        </div>
        <Filter className="mobile-filter-expand-btn" />
      </div>
      <div className="content-layout">
        <section className="content-layout__sidebar">
          <FilterSidebar />
        </section>
        <section className="content-layout__body">
          <ContentBlock />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Home;

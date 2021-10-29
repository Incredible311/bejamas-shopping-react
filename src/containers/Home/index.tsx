import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, ChevronLeft, ChevronRight } from "react-feather";
import { RootState } from '../../redux/store';
import { getProducts } from "../../redux/slices/dashboard";
import DefaultLayout from '../../assets/layout/DefaultLayout';
import FeatureBlock from '../../components/FeatureBlock';
import FilterSidebar from '../../components/FilterSidebar';
import ContentBlock from '../../components/ContentBlock';
import { ReactComponent as Sort } from "../../assets/images/icons/sort.svg";
import { ReactComponent as Filter } from "../../assets/images/icons/filter.svg";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const perPage = 6;
  const { products } = useSelector((state: RootState) => state.dashboard);

  const [featureProduct, setFeatureProduct] = useState();
  const [productList, setProductList] = useState<any>();
  const [mobileFilter, setMobileFilter] = useState(false)
  const [page, setPage] = useState(0);
  const [count, setCount] = useState<number>(0);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [rangeFilter, setRangeFilter] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("name");

  const handleSort = useCallback((event) => {
    const tmp: any[] = products.filter((product: any) => !product.featured && product);
    if (event.currentTarget.value === "name") {
      tmp.sort((a, b) =>  a.name.localeCompare(b.name));
    } else if (event.currentTarget.value === "price") {
      tmp.sort((a, b) =>  a.price - b.price);
    }
    setSort( event.currentTarget.value)
    setProductList(tmp)
  }, [sort, setSort, products, setProductList])

  const handleCategoryFilter = useCallback((event: any) => {
    const value = event.currentTarget.id;
    let temp = categoryFilter;
    const exist = temp.find((cat) => cat.toLowerCase() === value.toLowerCase());
    if (exist) {
      temp = temp.filter((cat) => cat.toLowerCase() !== value.toLowerCase());
    } else {
      temp.push(value.toLowerCase());
    }
    let tmp = products.filter((product: any) => !product.featured && product);
    if (temp.length > 0) {
      tmp = tmp.filter((product: any) => temp.indexOf(product.category.toLowerCase()) > -1)
    }
    setProductList(tmp);
    setCount(tmp.length);
    setCategoryFilter(temp);
    setPage(0);
  }, [products, categoryFilter, setCategoryFilter, setPage, setProductList, setCount])

  const handleRangeFilter = useCallback((event: any) => {
    const value = event.currentTarget.id;
    let temp = rangeFilter;
    const exist = temp.find((range) => range.toLowerCase() === value.toLowerCase());
    if (exist) {
      temp = temp.filter((range) => range.toLowerCase() !== value.toLowerCase());
    } else {
      temp.push(value.toLowerCase());
    }
    const tmp: any[] = products.filter((product: any) => !product.featured && product);
    let productListData: any = [];
    if (temp.length > 0) {
      const productTemp: any[] = [];
      temp.forEach((range) => {
        if (range === "lower20") {
          productTemp.push(tmp.filter((product: any) => product.price < 20))
        } else if (range === "20-100") {
          productTemp.push(tmp.filter((product: any) =>
            product.price >= 20 && product.price < 100))
        } else if (range === "100-200") {
          productTemp.push(tmp.filter((product: any) =>
            product.price >= 100 && product.price <= 200))
        } else if (range === "more200") {
          productTemp.push(tmp.filter((product: any) => product.price > 200))
        }
      })
      productListData = productTemp.reduce((prev, next) => prev.concat(next));

    } else {
      productListData = tmp;
    }
    setProductList(productListData);
    setCount(productListData.length);
    setRangeFilter(temp);
    setPage(0);
  }, [products, rangeFilter, setRangeFilter, setPage, setProductList, setCount])

  const mobileFilterMemo: any = useMemo(() => (
    mobileFilter && <div className="mobile-filter-layout">
      <div className="mobile-filter-sidebar">
        <div className="mobile-filter-title">
          <h3>Filter</h3>
          <X onClick={() => setMobileFilter(false)} size={32} className="mobile-filter-close-btn" />
        </div>
        <div className="mobile-filter-content">
          <FilterSidebar category={handleCategoryFilter} range={handleRangeFilter} />
        </div>
        <div className="mobile-filter-action-div">
          <button className="clear-btn" type="button">CLEAR</button>
          <button className="save-btn" type="button">SAVE</button>
        </div>
      </div>
    </div>
  ), [mobileFilter, setMobileFilter])

  const featureBlockMemo = useMemo(() => (
    featureProduct && <FeatureBlock product={featureProduct} />
  ), [featureProduct])

  const contentBlockMemo = useMemo(() => {
    const sliceProducts = (productList &&
      productList.slice(page * perPage, (page + 1) * perPage)) || []
    return sliceProducts.length > 0 ?
      <ContentBlock products={sliceProducts} /> :
      <div className="no-products">No data</div>
  }, [productList, page, categoryFilter, rangeFilter, sort])

  const goToPage = useCallback((num) => {
    const pages = Math.ceil(count / perPage);
    if (num >= 0 && num < pages) {
      setPage(num)
    }
  }, [setPage, count, perPage])

  const paginationMemo = useMemo(() => {
    const pages = Math.ceil(count / perPage);
    const tags: any[] = [];
    for (let i = 0; i < pages; i += 1) {
      if (page === i) {
        tags.push(<div key={i} role="button" onClick={() => goToPage(i)}
          tabIndex={0}
          onKeyDown={() => goToPage(i)}
          className="pagination-tag select">{i + 1}</div>);
      } else {
        tags.push(<div key={i} role="button" onClick={() => goToPage(i)}
          tabIndex={0}
          onKeyDown={() => goToPage(i)}
          className="pagination-tag">{i + 1}</div>)
      }

    }
    return tags;
  }, [perPage, page, count])

  useEffect(() => {
    dispatch(getProducts());
    if (products) {
      products.filter((product: any) => product.featured && setFeatureProduct(product));
      const tmp = products.filter((product: any) => !product.featured && product);
      tmp.sort((a: any, b: any) =>  a.name.localeCompare(b.name));
      setProductList(tmp);
      setCount(tmp.length);
    }

  }, [dispatch, page]);


  return (
    <DefaultLayout>
      {featureBlockMemo}
      <hr />
      <div className="d-flex-center justify-between flex-wrap content-top-block">
        <h3 className="content-title">
          Photography / <span style={{ color: '#9B9B9B' }}>Premium Photos</span>
        </h3>
        <div className="d-flex-center sort-div">
          <Sort />
          <p className="sort-by-title">SORT BY</p>
          <select className="sort-by-select" onChange={(e) => handleSort(e)} value={sort}>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
        <Filter onClick={() => setMobileFilter(true)} className="mobile-filter-expand-btn" />
      </div>
      <div className="content-layout">
        <section className="content-layout__sidebar">
          <FilterSidebar category={handleCategoryFilter} range={handleRangeFilter} />
        </section>
        <section className="content-layout__body">
          {contentBlockMemo}
          <div className="pagination-layout d-flex-center">
            <div className={page === 0 ? "pagination-tag disabled" : "pagination-tag prev"}
              aria-label="prev"
              role="button" onClick={() => goToPage(page - 1)}
              tabIndex={0}
              onKeyDown={() => goToPage(page - 1)}><ChevronLeft /></div>
            {paginationMemo}
            <div className={Math.ceil(count / perPage) === page + 1 ?
              "pagination-tag disabled" : "pagination-tag next"}
              aria-label="next"
              role="button" onClick={() => goToPage(page + 1)}
              tabIndex={0}
              onKeyDown={() => goToPage(page + 1)}><ChevronRight /></div>
          </div>
        </section>
      </div>
      {mobileFilterMemo}

    </DefaultLayout>
  );
};

export default Home;

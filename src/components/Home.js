import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../store/productSlice";
import ReactLoading from "react-loading";
import Footer from "./Footer";
import Filter from "./Filter";




const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return (
      <ReactLoading type={"cylon"} color="green" height={667} width={375} />
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
    <Filter/>
      <div className="container mx-auto mt-8 flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Home;

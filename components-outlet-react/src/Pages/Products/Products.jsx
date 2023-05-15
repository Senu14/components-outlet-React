import React from "react";
import { useOutlet } from "react-router-dom";
import { useFetch } from "../../Hooks/fetch";
import Pagination from "../../components/Pagination";
import  Card  from "../../components/Cards/Card"

const Products = () => {


  const outlet = useOutlet();
  return (
    <>
      {/* Hvis outlet er tom, så vis ProductInfo ellers vis indhold af outlet*/}
      {outlet || <ProductInfo />}
    </>
  );
};

const ProductInfo = () => {

  const url = "https://api.mediehuset.net/bakeonline/products";
  const { apiData, loading, error } = useFetch(url, "items");

  
  //Tjekker om det er færdig med at load
  if(loading) {
    return <div>Loading...</div>
  }

  //Tjekker om der er nogle errors
  if(error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <h1>Products</h1>
      <Pagination items={apiData} childComponent={Card} childProps={{auto:"autofit"}} />
    </>
  );
};

export default Products;
import axios from "axios";

  const productsUrl = axios.create({
    baseURL:  'https://fakestoreapi.com/products',
});
export {productsUrl}
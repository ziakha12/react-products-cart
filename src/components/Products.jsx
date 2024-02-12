import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Cards from "./Card";
import { useCartContext } from "../contexts/CartContext";

function Products() {
  const options = [
    { value: 8, text: "--select options--" },
    { value: 10, text: "10 products" },
    { value: 12, text: "12 products" },
    { value: 16, text: "16 products" },
    { value: 20, text: "20 products" },
  ];

  const [products, setproducts] = useState([]);
  const [Error, setError] = useState("");
  const [sliceValue, setsliceValue] = useState(options[0].value);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((productsData) => {
        setproducts(productsData.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (Error) {
    return (
      <div className="container">
        <div className="row">
          <h1 className="bg-red-500 text-white p-2 text-2xl ">{Error}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="product-header flex items-center justify-between px-5">
              <h1 className="text-white text-[30px]">Products</h1>
              <div className="flex gap-3 items-center">
                <p className="text-white text-[14px] m-0">Products on page : </p>
                <select
                  onChange={(e) => setsliceValue(e.target.value)}
                  className="text-slate-900 text-[15px] w-[200px]"
                >
                  {options.map((opt) => (
                    <option value={opt.value}>{opt.text}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {products.slice(0, sliceValue).map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
              <useCartContext>
                <Cards {...product} />
              </useCartContext>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;

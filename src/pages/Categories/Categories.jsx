import React, { useEffect, useState } from "react";
import "./style.scss";

function Categories() {
  let [cat, updateCat] = useState([]);
  let [product, updateproduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((r) => r.json())
      .then((c) => updateCat(c));

    fetch("https://dummyjson.com/products")
      .then((r) => r.json())
      .then((pro) => updateproduct(pro));
  }, []);

  return (
    <>
      <div className="container-fluid bg-secondary py-3 mb-3">
        <div className="row">
          {cat.map((c) => (
            <div className="col">
              <a href="">{c}</a>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
           
            // <div className="col m-3">
            //   <div className="card">
            //     <div className="image">
            //       <img src={p.image} alt />
            //     </div>
            //     <div className="only-price">
            //       <div className="only">मात्र</div>
            //       <div className="price">Rs 15000</div>
            //     </div>
            //     <div className="card-title">
            //       Lorem ipsum dolor sit amet consectetur adipisicing.
            //     </div>
            //     <div className="fixed-price">Rs 451.258</div>
            //     <div className="card-button">BUY</div>
            //   </div>
            // </div>
       
        </div>

      </div> */}
    </>
  );
}

export default Categories;

import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [categoryData, setCategoryData] = useState();

  const [selectedCate, setseletedCate] = useState(localStorage.getItem("selectedCate") );
   
  const [sort, setSort] = useState(localStorage.getItem("sortOrder"));
  
  
  useEffect(() => {
    localStorage.setItem("sortOrder", sort);
    localStorage.setItem("selectedCate", selectedCate);

  }, [sort ,selectedCate ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
 const cateData = fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())
  .then(json=>{console.log("category product" ,json)  ; setCategoryData(json)})
}, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(selectedCate == "allproduct" ? `https://fakestoreapi.com/products?sort=${sort}/${selectedCate}` :`https://fakestoreapi.com/products/category/${selectedCate}` );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json(); 
        setData(result); 
        console.log("Fetched Data:", result);  
      } catch (err) {
        setError(err.message);
        console.error("Error:", err);  
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [selectedCate, sort]);

  return (
    <StoreContext.Provider value={{ data, categoryData,loading, error ,setseletedCate  ,selectedCate,sort, setSort}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

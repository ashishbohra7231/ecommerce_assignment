import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json(); // Parse response as JSON
        setData(result); // Store parsed data in state
        console.log("Fetched Data:", result); // Debugging: Log the fetched data
      } catch (err) {
        setError(err.message);
        console.error("Error:", err); // Debugging: Log the error
      } finally {
        setLoading(false); // Stop loading spinner or UI indication
      }
    };

    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ data, loading, error }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

import React, { useContext } from 'react' 
import { StoreContext } from '../../Components/Storecontext/Storecontext';
import ProductCard from '../../Components/Product/ProductCard';

export default function Homepage() {
    const { data, loading, error } = useContext(StoreContext);
 console.log("data",data)
  return (
<div className='container flex items-center justify-center'> <div className='grid grid-cols-2 gap-1 md:grid-cols-5  w-[90%] mx-auto my-20'>


      { data && data.map((product) => (
    <div key={product.id}>
     <ProductCard product={product} />

    </div>
      ))} 
    </div></div>   
  )
}

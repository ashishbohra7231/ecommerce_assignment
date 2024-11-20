import React, { useContext } from 'react' 
import { StoreContext } from '../Components/Storecontext/Storecontext';
import ProductCard from '../Components/Product/ProductCard';

export default function Homepage() {
    const { data, categoryData, selectedCate ,setseletedCate,loading, sort, setSort, error } = useContext(StoreContext);
 console.log("data",selectedCate)
  return (
<div className=' w-[98%]  md:w-[90%] mx-auto my-20 flex flex-col'>
<div className='flex gap-2'> 
    <div className='mb-2'>
  <label   className="block mb-2">Filter:</label>
  <select 
  value={localStorage.getItem("selectedCate")}
    onChange={(e) => {
        setseletedCate(e.target.value);
      console.log("Selected Category:", e.target.value);
    }}
    className="border border-gray-300 rounded p-2"
  ><option value={""}  >
  All
</option>
    {categoryData && categoryData.map((item, index) => (
      <option value={item} key={index}>
        {item}
      </option>
    ))}
  </select>
  
</div>
<div>
<label htmlFor="sortOrder" className="block mb-2">Sort Order:</label>
  <select
    id="sortOrder"
    value={localStorage.getItem("sortOrder")}
    onChange={(e) => {
      setSort(e.target.value);
      console.log("Selected Sort Order:", e.target.value);
    }}
    className="border border-gray-300 rounded p-2"
  >  <option value="">Default</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
        </div>
</div>
    <div>
  
        </div>
    <div className='  w-full flex items-center justify-center'>
  
    <div className='grid grid-cols-2 gap-1 md:grid-cols-5'>


      { data ? data.map((product) => (
    <div key={product.id}>
     <ProductCard product={product} />

    </div>
      )) : <div class=" w-full h-full flex justify-center items-center">
      <div class="w-16 h-16 border-4 border-t-orange-500 border-transparent rounded-full animate-spin"></div>
    </div>
    } 
    </div>
    </div>   
</div>

  )
}


import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { pageSettings } from '../../constants/style';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const PCard = ({id, productName, productImg,category}) =>(
  <NavLink to={`/asset/${id}`} className="h-auto w-24 sm:w-96 rounded-xl shadow-card flex flex-col overflow-hidden ">
      <motion.div whileHover={{scale : 1.1}} className="w-full flex justify-center">
          <img className="object-contain hover:object-scale-down" src={productImg[0]} alt="img" />
      </motion.div>
      <div className="w-full px-2 py-10 z-10 bg-white flex flex-col gap-3">
          <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{productName}</p>
          <p className="text-sm font-medium" >{category}</p>
      </div>
  </NavLink>
)

const Filter = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  return (
    <div className='w-[500px] rounded-md shadow-product'>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex flex-col gap-2'>
          <div className='text-xl font-bold'>Filter</div>
          <div className='text-sm'>Search: {searchQuery}</div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-xl font-bold'>Sort</div>
          <div className='text-sm'>Sort by: </div>
        </div>
      </div>
    </div>
  )
}

const Result = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  //After we connect backend, we can use this to store the result
  const [result, setResult] = useState([{

  }]);

  //TODO: Got the result from the server
  // useEffect(() => {
  //   fetch(`http://localhost:3001/search?search=${searchQuery}`)
  //     .then(res => res.json())
  //     .then(data => setResult(data))
  // }, [searchQuery])

  console.log(result.length)
  return (
    <div className='w-7/12 relative p-12'>
      <div className='w-full flex justify-between'>
        <div className='text-xl font-bold'>Search result for: "{searchQuery}"</div>
        <div className='text-sm'>Found {result.length} results</div>
      </div>
      
      <div>
        {result.length === 0 ?
          <Empty/> 
          :
          <div className='flex flex-col gap-5'>
            {result.map((product, index) => 
              <PCard 
                key={index} 
                id = {product.id}
                productName={product.productName} 
                productImg={product.img}  />
            )}
          </div>
        }
      </div>
    </div>
  )
}

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  return (
    <div className={`relative mt-56 w-full text-black ${pageSettings.padding}`}>
      <div className='relative w-full flex gap-5'>
        <Filter />
        <Result />
      </div>
    </div>
  )
}

export default SearchResult
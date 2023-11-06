
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { pageSettings } from '../../constants/style';

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
  const [result, setResult] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/search?search=${searchQuery}`)
  //     .then(res => res.json())
  //     .then(data => setResult(data))
  // }, [searchQuery])

  return (
    <div className='w-3/4'>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex flex-col gap-2'>
          <div className='text-xl font-bold'>Result</div>
          <div className='text-sm'>Search: {searchQuery}</div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-xl font-bold'>Sort</div>
          <div className='text-sm'>Sort by: </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 p-5'>
        {result.map((item, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>{item.title}</div>
            <div className='text-sm'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  return (
    <div className={`relative mt-56 w-full text-black ${pageSettings.padding}`}>
      <div className='relative w-full border flex gap-5'>
        <Filter />
        <Result />
      </div>
    </div>
  )
}

export default SearchResult
import { FilterBar,FilterResults } from '../../components';
import { pageSettings } from '../../constants/style';

import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Pagination, 
} from 'antd';

const SearchResult = () => {
  const [searchParams] = useSearchParams(); // get search params from url
  const searchQuery = searchParams.get('search'); // get search result from url

  const [tags, setTags] = useState([searchQuery]); // set tags for result
  const [filter, setFilter] = useState([
    {
      title: 'Status',
      options: [
        {
          name: 'Buy now',
          value: false,
        },
        {
          name: 'Pre-order',
          value: false,
        },
        {
          name: 'New release',
          value: false,
        }
      ]
    },
    {
      title: 'Seller type',
      options: [
        {
          name: 'Verified store',
          value: false,
        },
        {
          name: 'Personal store',
          value: false,
        }
      ]
    },
  ]); 
  
  // set filter for result
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    setTags([searchQuery, ...tags.slice(1)]);
  }, [searchParams])

  return (
    <div className={`relative mt-56 w-full text-black ${pageSettings.padding}`}>
      <div className='relative w-full flex gap-5'>
        <FilterBar filter={filter} setFilter={setFilter} setTags = {setTags}/>
        <FilterResults tags={tags} setFilter={setFilter} setTags = {setTags}/>
      </div>
      <div className='w-full flex justify-center my-10'>
        <Pagination defaultCurrent={1} total={1} />
      </div>
    </div>
  )
}

export default SearchResult
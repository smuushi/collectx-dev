
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { pageSettings } from '../../constants/style';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  return (
    <div className={`relative mt-36 ${pageSettings.padding}`}>
      <p>Search results for "{searchQuery}"</p>
    </div>
  )
}

export default SearchResult
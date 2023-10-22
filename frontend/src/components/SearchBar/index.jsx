import { SearchOutlined } from '@ant-design/icons';

import { useState } from 'react';

const SearchBar = () => {
    const [searchValue,setSearchValue] = useState('');
    return (
        <div className='w-full h-full flex  items-center px-2 bg-white shadow-product rounded-xl'>
            <input 
                className='w-full h-full border-none outline-none px-4 shadow-none select-none focus:border-transparent text-sm' 
                type="text" 
                placeholder='Search some cards...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className='flex items-center px-2'>
                <SearchOutlined />
            </button>
        </div>
    )
}

export default SearchBar;
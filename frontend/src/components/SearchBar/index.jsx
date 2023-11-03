import { SearchOutlined } from '@ant-design/icons';
import data from "../../constants/searchKeyWord.json";

import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const SearchBar = ({color}) => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        const res = data.names.filter((name) =>
            name.toLowerCase().includes(text.toLowerCase())
        );
        setList([...res]);
    }, [text]);

    
    return (
        <div className="relative h-auto">
            <div className='w-full h-full border rounded-md outline-none flex items-center justify-start gap-5 overflow-hidden'>
                <input
                    type="text"
                    value={text}
                    className="h-12 w-full py-[20px] px-[12px] focus:outline-none"
                    placeholder="Search product..."
                    onChange={(e) => setText(e.target.value)}
                />
                <NavLink 
                    to={`/search/?search=${text}`}
                    className='flex items-center px-2 w-12 h-12'>
                    <SearchOutlined className={color}/>
                </NavLink>
            </div>
            <motion.div layout className='w-full rounded-md mt-[5px] max-h-[200px] shadow-button overflow-auto'>
                {text ? (
                <>
                    {list.map((name) => (
                    <motion.div 
                        layout key={name} 
                        className="p-[10px] bg-white select-none cursor-pointer hover:bg-slate-100" onClick={()=>setText(name)}>
                        {name}
                    </motion.div>
                    ))}
                </>
                ) : null}
            </motion.div>
        </div>
    )
}

export default SearchBar;
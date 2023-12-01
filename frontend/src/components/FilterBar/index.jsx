import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Space,
} from 'antd';


const FilterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="mb-4 border rounded-xl py-2 px-5">
        <div 
        className="flex justify-between items-center cursor-pointer p-2 " 
        onClick={() => setIsOpen(!isOpen)}
        >
        <h3>{title}</h3>
        <motion.span
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            className="select-none"
        >
            ▼
        </motion.span>
        </div>
        <div>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 flex flex-col gap-5 py-5"
            >
            {children}
            </motion.div>
        )}
        </div>
    </div>
    );
};


const FilterBar = ({filter,setFilter, setTags}) => {

    //After we connect backend, we can use this to store the result

    const handleCheckBox = (e,filterTitle, optionName) => {
        const tag = e.target.value;

        // Update the filter array based on the existence of the tag
        setFilter(currentFilters => {
            return currentFilters.map(filterGroup => {
              // 找到被修改的过滤器组
                if (filterGroup.title === filterTitle) {
                    return {
                        ...filterGroup,
                        options: filterGroup.options.map(option => {
                            if (option.name === optionName) {
                            //switch the value of the option
                                return { ...option, value: !option.value };
                            }
                            return option;
                        }),
                    };
                }
                return filterGroup;
            });
        });

        // Update the tags array based on the existence of the tag
        setTags(prevTags => {
            const tagIndex = prevTags.indexOf(tag);
            if (tagIndex === -1) {
            // Tag doesn't exist, add it
            return [...prevTags, tag];
            } else {
            // Tag exists, remove it
            return prevTags.filter(t => t !== tag);
            }
        });
    }

    return (
    <div className='w-[350px] hidden md:block'>
        <Space direction='vertical' size='middle' className='w-full p-5'>
            <div className='text-xl font-bold'>Filter</div>
            {filter.map((item, index) => (
                <FilterSection key={index} title={item.title}>
                    {item.options.map((option, index) => (
                        <label key={index} className="flex justify-between">{option.name} <input type="checkbox" value={option.name} checked={option.value} onChange={(e) => handleCheckBox(e,item.title, option.name)} className="mr-2"/></label>
                    ))}
                </FilterSection>  
            ))}
        </Space>
    </div>
    )
}


export default FilterBar;
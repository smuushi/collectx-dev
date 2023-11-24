import { resultData } from '../../constants/testData/card';

import { useSearchParams } from 'react-router-dom'
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import { 
    Empty, 
    Tag,
    Image,
    Input,
    theme, 
    Tooltip
} from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';


//Result card
const Card = ({ product }) => {
    return (
    <div className='w-full flex justify-start gap-7 p-2'>
        <div className='w-64 h-64'>
            <Image src={product.img[0]} alt='img' className='object-contain' />
        </div>
        <div className='flex-1 h-full flex flex-col gap-10'>
            <div className='text-xl font-bold overflow-hidden text-ellipsis whitespace-nowrap'>{product.name}</div>
            <div className='flex gap-7'>
            <p>post by: <span className='font-semibold'>{product.consumer.name}</span></p>
            {product.consumer.isVerified && 
                <Tag icon={<CheckCircleOutlined />} color="#4CAF50">
                Verified Store
                </Tag>
            } 
            </div>

            <div className="flex gap-3">
            <p>market price:</p>
            {product.price && 
            <span className='text-xl font-bold'>${product.price.current}</span>
            }
            </div>
        </div>
    </div>
    )
}
const FilterResult = ({tags,setFilter,setTags}) => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');
    //After we connect backend, we can use this to store the result
    const [result, setResult] = useState(resultData);

    //Tag part
    const { token } = theme.useToken();
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);

    //if the tag is not empty, we will show the tag
    useEffect(() => {
    if (inputVisible) {
        inputRef.current?.focus();
    }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);

    //delete the tag
    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && !tags.includes(inputValue)) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue("");
    };

    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setEditInputValue("");
    };

    const tagInputStyle = {
        width: 64,
        height: 22,
        marginInlineEnd: 8,
        verticalAlign: "top"
    };

    //TODO: Got the result from the server
    // useEffect(() => {
    //   fetch(`http://localhost:3001/search?search=${searchQuery}`)
    //     .then(res => res.json())
    //     .then(data => setResult(data))
    // }, [searchQuery])

    return (
    <div className='w-9/12 relative p-12 flex flex-col gap-10'>
        <div className='w-full flex justify-between'>
        <div className='text-xl font-bold'>Search result for: "{searchQuery}"</div>
        <div className='text-sm'>Found {result.length} results</div>
        </div>
        {tags.length !== 0 &&
        <div className='w-full flex gap-7'>
        <p className='text-md'>Additional tag :</p>
        {tags.map((tag, index) => {
        if (editInputIndex === index) {
            return (
            <Input
                ref={editInputRef}
                key={tag}
                size="small"
                style={tagInputStyle}
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
            />
            );
        }
        const isLongTag = tag.length > 20;
        const tagElem = (
            <Tag
                key={tag}
                closable={index !== 0}
                style={{ userSelect: "none" }}
                onClose={() => handleClose(tag)}
            >
            <span
                onDoubleClick={(e) => {
                if (index !== 0) {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    e.preventDefault();
                }
                }}
            >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
            </Tag>
        );
        return isLongTag ? (
            <Tooltip title={tag} key={tag}>
            {tagElem}
            </Tooltip>
        ) : (
            tagElem
        );
        })}
        </div>
        }
        <div className=''>
        {result.length === 0 ?
            <div className='w-full h-96 flex items-center justify-center'>
            <Empty description='No card found' />
            </div>
            :
            <div className='flex flex-col gap-10'>
            {result.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full shadow-product p-5 rounded-lg'
                >
                <Card product={item} />
                </motion.div>
            ))}
            </div>
        }
        </div>
    </div>
    )
}


export default FilterResult;

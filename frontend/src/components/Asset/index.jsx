import { findProductById } from "../../Utils"
import { database_product_info } from "../../constants/testData/card";
import ProductCard from "../ProductCard";
import style from "../../style.module.scss"

import { useState } from "react";
import { motion } from "framer-motion";
import { message } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Payment from "../Payment";


function ProductTagPrinter({ data }) {
    return (
    <div>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
        {Object.entries(data.tag).map(([key, value]) => (
            <li key={key} className="px-5 py-2 bg-tertiary rounded-full text-xs">
            {key}:<strong>{value}</strong> 
            </li>
        ))}
        </ul>
    </div>
    );
}




const Assets = ({id}) =>{
    const product = findProductById(id,database_product_info);
    const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate();
    const [showPayment,setShowPayment] = useState(false);

    const buyItem = () => {
        if(!isAuthenticated){
            //message.info("Please login first")
            navigate('/login')
        }

        setShowPayment(true);
    }
    const makeOffer = () =>{
        if(!isAuthenticated){
            message.info("Please login first")
            navigate('/login')
        }
    }
    const handleFavour = () =>{
        if(!isAuthenticated){
            message.info("Please login first")
            navigate('/login')
        }
    }

    return(
        <div className="w-full flex justify-between sm:flex-row flex-col gap-20"> 
            
            <div>
                <div className="w-full md:w-80 2xl:w-96">
                    <ProductCard product={product} />
                </div>
            </div>

            <div className="w-full px-12 flex">
                <div className="w-full flex flex-col gap-8">
                    <p className="text-2xl font-bold">{product.name}</p>
                    <p className="font-bold"><span className=" font-normal">Condition:</span> Excellent</p>
                    <p className="">price: <span className="font-bold text-xl">C ${product.price.current}</span></p>
                    <p>Owned by:&nbsp;
                        <NavLink to={`/guest-profile/${product.consumer.id}`} className="text-blue-500 hover:underline">
                            {product.consumer.name}
                        </NavLink>
                    </p>
                    <div className="mt-8 sm:mt-12">
                        <ProductTagPrinter data={product} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={buyItem}
                            className="w-full md:w-32 h-12 bg-white text-black shadow-product px-5 py-2 rounded-md">Buy</motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-32 h-12 bg-white text-black shadow-product px-5 py-2 rounded-md">Make offer</motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleFavour}
                            className="w-full md:w-32 h-12 bg-white text-black shadow-product px-5 py-2 rounded-md"><HeartOutlined className="text-xl"/></motion.button>
                    </div>
                </div>
            </div>

            {showPayment && <Payment setShowPayment={setShowPayment} product={product}/>}
        </div>
    )
}

export default Assets;
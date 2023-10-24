import { findProductById } from "../../Utils"
import { database_product_info } from "../../constants/testData/card";

import { BsFillShareFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

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
const Carousel = ({img}) => {
    const [ currentImg, setImg ] = useState(img[0]);

    return(
        <div className="w-full flex flex-col gap-10">
            <img className="rounded-lg" src={currentImg} alt="img" />
            <div className="grid grid-cols-4 gap-5 w-full ">
                {img.map((img,index)=>(
                    <div key={index} onClick={()=>setImg(img)}>
                        <img className={`rounded-lg cursor-pointer ${img === currentImg ? "border border-indigo-600" : ""}`} src={img} alt="img" />
                    </div>
                ))}
            </div>
        </div>


    )
}

const Assets = ({id}) =>{
    let product = findProductById(id,database_product_info);
    const btnBlue = "text-center p-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
    const btnWhite= "text-center p-3 rounded-lg text-blue-600 bg-slate-200 hover:bg-slate-300 cursor-pointer"
    return(
        <div className="w-full flex justify-between sm:flex-row flex-col gap-20"> 
            <div className="sm:w-1/2 w-full">
                <Carousel img={product.img}/>
            </div>

            <div className="sm:w-1/2 w-full flex flex-col gap-5">
                <div>Owned by <span className="text-indigo-300">0XDF3A...cCCf</span></div>
                <div><p className={`font-extrabold text-2xl tracking-wide`}>{product.name}</p></div>
                <div className="flex flex-wrap gap-8">
                    <motion.div className={`${btnBlue} w-24 `} whileHover={{scale:1.02}} >Buy</motion.div>
                    <motion.div className={`${btnBlue} w-36 `} whileHover={{scale:1.02}} >Make Offer </motion.div>
                    <motion.div 
                        className={`${btnWhite} w-36 flex justify-center items-center gap-2`}
                        whileHover={{scale:1.05}}>
                        <BsFillShareFill /> <span>Share</span>
                    </motion.div>
                </div>

                <div className="mt-8 sm:mt-20">
                    <ProductTagPrinter data={product} />
                </div>
            </div>
        </div>
    )
}

export default Assets;
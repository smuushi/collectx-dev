import { findProductById } from "../../Utils"
import { database_product_info } from "../../constants/testData/card";
import ProductCard from "../ProductCard";
import style from "../../style.module.scss"

import { useState } from "react";

const Assets = ({id}) =>{
    let product = findProductById(id,database_product_info);
    return(
        <div className="w-full flex justify-between sm:flex-row flex-col gap-20"> 
            <div>
                <div className="w-64 md:w-80 2xl:w-96">
                    <ProductCard product={product} />
                </div>
            </div>

            <div className="w-full px-12 flex border">
                <div className="w-full flex flex-col">
                    <p className="text-2xl font-bold">{product.name}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Assets;
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    
    const {id, name, img,tag} = product;
    return (
        <NavLink to={`/asset/${id}`} className="h-auto w-full rounded-xl shadow-card flex flex-col overflow-hidden ">
            <motion.div whileHover={{scale : 1.1}} className="w-full flex justify-center">
                <img className="object-contain hover:object-scale-down" src={img[0]} alt="img" />
            </motion.div>
            <div className="w-full px-2 py-10 z-10 bg-white flex flex-col gap-3">
                <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
                <p className="text-sm font-medium" >{tag.Category}</p>
            </div>
        </NavLink>
    )
}

export default ProductCard
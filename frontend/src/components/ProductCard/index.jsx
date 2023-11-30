import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Tilt from 'react-parallax-tilt';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const ProductCard = ({product}) => {

    
    const {id, name, img,tag} = product;
    return (
        <NavLink to={`/asset/${id}`} className="h-auto w-full">
            <Tilt glareEnable={true} glarePosition="all" >
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={false}
                    navigation={false}
                    loop={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <img src={img[0]} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img[1]} />
                    </SwiperSlide>
                </Swiper>
                {/* <NavLink to={`/asset/${id}`} className="h-auto w-full rounded-xl shadow-card flex flex-col overflow-hidden ">
                    <motion.div  className="w-full flex justify-center">
                        <img className="object-contain hover:object-scale-down" src={img[0]} alt="img" />
                    </motion.div>
                    <div className="w-full px-2 py-2 md:py-5 2xl:py-10 z-10 bg-white flex flex-col gap-3">
                        <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
                        <p className="text-sm font-medium" >{tag.Category}</p>
                    </div>
                </NavLink> */}
            </Tilt>
        </NavLink>

    )
}

export default ProductCard